// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { InsurancePlans, Scheduling, Providers, Credentials, ProviderTypes, Genders, Practices, Markets, Insurances, ProviderInsurances, ProviderPractices, ProvidersPractices, InsurancesMarkets } = initSchema(schema);

export {
  InsurancePlans,
  Scheduling,
  Providers,
  Credentials,
  ProviderTypes,
  Genders,
  Practices,
  Markets,
  Insurances,
  ProviderInsurances,
  ProviderPractices,
  ProvidersPractices,
  InsurancesMarkets
};