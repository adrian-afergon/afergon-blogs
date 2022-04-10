import * as React from 'react'
import { PostsRepository, postsRepository } from '../repositories/posts.repository'
import { TalksRepository, talksRepository } from '../repositories/talks.repository'
import { ResourcesRepository, resourcesRepository } from '../repositories/resources.repository'

export interface RepositoryContextProps {
  postsRepository: PostsRepository,
  talksRepository: TalksRepository,
  resourcesRepository: ResourcesRepository
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
