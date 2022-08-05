import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { InsurancePlans, Scheduling, Providers, Credentials, ProviderTypes, Genders, Insurances, ProviderInsurances, ProviderPractices, Practices, Markets } = initSchema(schema);

export {
  InsurancePlans,
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