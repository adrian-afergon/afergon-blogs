import { LocaleResource } from '../../common/domain/locale-resource'

export interface Post {
  title: string;
  summary: string;
  date: number;
  locale: string;
  locales?: LocaleResource[]
  link: string;
  external: boolean;
  handle?: string;
  type: string;
}
