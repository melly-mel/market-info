import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ServiceAreaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class ServiceArea {
  readonly id: string;
  readonly name?: string | null;
  readonly code?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ServiceArea, ServiceAreaMetaData>);
  static copyOf(source: ServiceArea, mutator: (draft: MutableModel<ServiceArea, ServiceAreaMetaData>) => MutableModel<ServiceArea, ServiceAreaMetaData> | void): ServiceArea;
}