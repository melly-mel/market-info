import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type InsurancePlansMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SchedulingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProvidersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CredentialsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProviderTypesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GendersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PracticesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MarketsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type InsurancesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProviderInsurancesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProvidersPracticesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type InsurancesMarketsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class InsurancePlans {
  readonly id: string;
  readonly name?: string | null;
  readonly type?: string | null;
  readonly code?: string | null;
  readonly insurancesID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<InsurancePlans, InsurancePlansMetaData>);
  static copyOf(source: InsurancePlans, mutator: (draft: MutableModel<InsurancePlans, InsurancePlansMetaData>) => MutableModel<InsurancePlans, InsurancePlansMetaData> | void): InsurancePlans;
}

export declare class Scheduling {
  readonly id: string;
  readonly Provider?: Providers | null;
  readonly can_schedule?: boolean | null;
  readonly schedule_notes?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly schedulingProviderId?: string | null;
  constructor(init: ModelInit<Scheduling, SchedulingMetaData>);
  static copyOf(source: Scheduling, mutator: (draft: MutableModel<Scheduling, SchedulingMetaData>) => MutableModel<Scheduling, SchedulingMetaData> | void): Scheduling;
}

export declare class Providers {
  readonly id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly npi?: number | null;
  readonly Credential?: Credentials | null;
  readonly ProviderType?: ProviderTypes | null;
  readonly Gender?: Genders | null;
  readonly practicess?: (ProvidersPractices | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly providersCredentialId?: string | null;
  readonly providersProviderTypeId?: string | null;
  readonly providersGenderId?: string | null;
  constructor(init: ModelInit<Providers, ProvidersMetaData>);
  static copyOf(source: Providers, mutator: (draft: MutableModel<Providers, ProvidersMetaData>) => MutableModel<Providers, ProvidersMetaData> | void): Providers;
}

export declare class Credentials {
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Credentials, CredentialsMetaData>);
  static copyOf(source: Credentials, mutator: (draft: MutableModel<Credentials, CredentialsMetaData>) => MutableModel<Credentials, CredentialsMetaData> | void): Credentials;
}

export declare class ProviderTypes {
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ProviderTypes, ProviderTypesMetaData>);
  static copyOf(source: ProviderTypes, mutator: (draft: MutableModel<ProviderTypes, ProviderTypesMetaData>) => MutableModel<ProviderTypes, ProviderTypesMetaData> | void): ProviderTypes;
}

export declare class Genders {
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Genders, GendersMetaData>);
  static copyOf(source: Genders, mutator: (draft: MutableModel<Genders, GendersMetaData>) => MutableModel<Genders, GendersMetaData> | void): Genders;
}

export declare class Practices {
  readonly id: string;
  readonly name?: string | null;
  readonly Market?: Markets | null;
  readonly address?: string | null;
  readonly county?: string | null;
  readonly website?: string | null;
  readonly phone_number?: string | null;
  readonly fax?: string | null;
  readonly nearby_landmarks?: string | null;
  readonly humana_pcp_number?: number | null;
  readonly providerss?: (ProvidersPractices | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly practicesMarketId?: string | null;
  constructor(init: ModelInit<Practices, PracticesMetaData>);
  static copyOf(source: Practices, mutator: (draft: MutableModel<Practices, PracticesMetaData>) => MutableModel<Practices, PracticesMetaData> | void): Practices;
}

export declare class Markets {
  readonly id: string;
  readonly state?: string | null;
  readonly city?: string | null;
  readonly insurancess?: (InsurancesMarkets | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Markets, MarketsMetaData>);
  static copyOf(source: Markets, mutator: (draft: MutableModel<Markets, MarketsMetaData>) => MutableModel<Markets, MarketsMetaData> | void): Markets;
}

export declare class Insurances {
  readonly id: string;
  readonly name?: string | null;
  readonly InsurancePlan?: (InsurancePlans | null)[] | null;
  readonly marketss?: (InsurancesMarkets | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Insurances, InsurancesMetaData>);
  static copyOf(source: Insurances, mutator: (draft: MutableModel<Insurances, InsurancesMetaData>) => MutableModel<Insurances, InsurancesMetaData> | void): Insurances;
}

export declare class ProviderInsurances {
  readonly id: string;
  readonly Provider?: Providers | null;
  readonly Insurance?: Insurances | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly providerInsurancesProviderId?: string | null;
  readonly providerInsurancesInsuranceId?: string | null;
  constructor(init: ModelInit<ProviderInsurances, ProviderInsurancesMetaData>);
  static copyOf(source: ProviderInsurances, mutator: (draft: MutableModel<ProviderInsurances, ProviderInsurancesMetaData>) => MutableModel<ProviderInsurances, ProviderInsurancesMetaData> | void): ProviderInsurances;
}

export declare class ProvidersPractices {
  readonly id: string;
  readonly providers: Providers;
  readonly practices: Practices;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ProvidersPractices, ProvidersPracticesMetaData>);
  static copyOf(source: ProvidersPractices, mutator: (draft: MutableModel<ProvidersPractices, ProvidersPracticesMetaData>) => MutableModel<ProvidersPractices, ProvidersPracticesMetaData> | void): ProvidersPractices;
}

export declare class InsurancesMarkets {
  readonly id: string;
  readonly markets: Markets;
  readonly insurances: Insurances;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<InsurancesMarkets, InsurancesMarketsMetaData>);
  static copyOf(source: InsurancesMarkets, mutator: (draft: MutableModel<InsurancesMarkets, InsurancesMarketsMetaData>) => MutableModel<InsurancesMarkets, InsurancesMarketsMetaData> | void): InsurancesMarkets;
}