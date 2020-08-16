import { Resource } from "../models/resource";

export interface ResourcesRepository {
  getResources: () => Promise<Resource[]>
}

export const resourcesRepository: ResourcesRepository = {
  getResources: async () => {
    const res = await fetch('/api/resources');
    return res.json();
  },
};
