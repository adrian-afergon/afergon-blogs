import * as React from 'react'
import { PostsApi, postsRepository } from '../api/posts.api'
import { TalksApi, talksRepository } from '../api/talks.api'
import { ResourcesApi, resourcesRepository } from '../api/resources.api'

export interface RepositoryContextProps {
  postsRepository: PostsApi,
  talksRepository: TalksApi,
  resourcesRepository: ResourcesApi
}

const defaultValue = {
  postsRepository,
  resourcesRepository,
  talksRepository
}

export const RepositoryContext = React.createContext<RepositoryContextProps>(defaultValue)

type Props = {
  children?: React.ReactNode
}

export const RepositoryProvider: React.FC<Props> = ({ children }) => (
  <RepositoryContext.Provider value={defaultValue}>{children}</RepositoryContext.Provider>)
