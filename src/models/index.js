// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { InsurancePlans, Scheduling, Providers, Credentials, ProviderTypes, Genders, Insurances, Markets, ProviderInsurances, ProviderPractices, Practices, InsurancesMarkets } = initSchema(schema);

export {
  InsurancePlans,
  Scheduling,
  Providers,
  Credentials,
  ProviderTypes,
  Genders,
  Insurances,
  Markets,
  ProviderInsurances,
  ProviderPractices,
  Practices,
  InsurancesMarkets
};