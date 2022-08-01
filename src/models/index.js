// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ServiceArea } = initSchema(schema);

export {
  ServiceArea
};