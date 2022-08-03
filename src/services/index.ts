import { DataStore } from '@aws-amplify/datastore';

export class DataStoreService {
    static async get(dataModel){
        const models = await DataStore.query(dataModel);
        console.log(models);
    }
    static async save(dataModel, args) {
        const newServiceArea = new dataModel(args);
        await DataStore.save(newServiceArea);
    }
    static async update(dataModel) {
        /* Models in DataStore are immutable. To update a record you must use the copyOf function
 to apply updates to the item’s fields rather than mutating the instance directly */
        await DataStore.save(dataModel.copyOf(CURRENT_ITEM, item => {
            // Update the values on {item} variable to update DataStore entry
        }));
    }
    static async delete(id, dataModel) {
        const modelToDelete = await DataStore.query(dataModel, id);
        if (modelToDelete){
            DataStore.delete(modelToDelete);
        }
    }
}