import { DataStore } from '@aws-amplify/datastore';
import { ServiceArea } from './models';

await DataStore.save(
    new ServiceArea({
        "name": "Lorem ipsum dolor sit amet",
        "code": "Lorem ipsum dolor sit amet"
    })
);

export class ServiceAreaQuery {
    async get(){
        const models = await DataStore.query(ServiceArea);
        console.log(models);
    }
    async save(name: string, code: string) {
        const newServiceArea = new ServiceArea({ name, code });
        await DataStore.save(newServiceArea);
    }
    async update() {
        /* Models in DataStore are immutable. To update a record you must use the copyOf function
 to apply updates to the item’s fields rather than mutating the instance directly */
        await DataStore.save(ServiceArea.copyOf(CURRENT_ITEM, item => {
            // Update the values on {item} variable to update DataStore entry
        }));
    }
    async delete(id: string) {
        const modelToDelete = await DataStore.query(ServiceArea, id);
        DataStore.delete(modelToDelete);
    }
}