import { DataStore, MutableModel, PersistentModel, PersistentModelConstructor } from '@aws-amplify/datastore';

export class DataStoreService {
    static async get<T extends PersistentModel>(dataModel: PersistentModelConstructor<T>, id?: string) {
        return DataStore.query(dataModel, id);
    }
    static async getAll<T extends PersistentModel>(dataModel: PersistentModelConstructor<T>) {
        return DataStore.query(dataModel);
    }
    static async save<T extends PersistentModel>(dataModel: T) {
        await DataStore.save(dataModel);
    }
    /**
     * Models in DataStore are immutable. To update a record you must use the copyOf function
     * to apply updates to the item’s fields rather than mutating the instance directly.
     * Update the values on {item} variable to update DataStore entry
     */
    static async update<T extends PersistentModel>(dataModel: PersistentModelConstructor<T>, id: string, updateFunc: (draft: MutableModel<T>) => T) {
        const original = await this.get(dataModel, id);
        await DataStore.save(dataModel.copyOf(original, updateFunc));
    }
    static async delete<T extends PersistentModel>(dataModel: PersistentModelConstructor<T>, id: string) {
        const modelToDelete = await DataStore.query(dataModel, id);
        if (modelToDelete) {
            DataStore.delete(modelToDelete);
        }
    }
}