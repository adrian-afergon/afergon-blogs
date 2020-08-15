import { Resource } from "../models/resource";
import { resources } from '../../data.json';

export interface ResourcesRepository {
  getResources: () => Promise<Resource[]>
}

export const resourcesRepository: ResourcesRepository = {
  getResources: () => Promise.resolve(resources),
};
