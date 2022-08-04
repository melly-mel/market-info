import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const { Scheduling, Providers, Credentials, ProviderTypes, Genders, Insurances, ProviderInsurances, ProviderPractices, Practices, Markets } = initSchema(schema);

export {
  Scheduling,
  Providers,
  Credentials,
  ProviderTypes,
  Genders,
  Insurances,
  ProviderInsurances,
  ProviderPractices,
  Practices,
  Markets
};