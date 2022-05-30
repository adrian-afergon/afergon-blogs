import { Resource } from '../models/resource'

export interface ResourcesApi {
  getResources: () => Promise<Resource[]>
}

export const resourcesRepository: ResourcesApi = {
  getResources: async () => {
    const res = await fetch('/api/resources')
    return res.json()
  }
}
