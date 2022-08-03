import { DataStore } from '@aws-amplify/datastore';

export class DataStoreService {
    static async get(dataModel){
        const models = await DataStore.query(dataModel);
        console.log(models);
    }
    static async save(dataModel, args) {
        const newDataModel = new dataModel(args);
        await DataStore.save(newDataModel);
    }
    static async update(dataModel, dataItem) {
        /* Models in DataStore are immutable. To update a record you must use the copyOf function
 to apply updates to the item’s fields rather than mutating the instance directly */
        await DataStore.save(dataModel.copyOf(dataItem, item => {
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