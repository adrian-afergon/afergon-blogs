import { LocaleResource } from './locale-resource'

export interface Talk {
  title: string;
  summary: string;
  places: string[];
  date: number;
  locale: string;
  link: string;
  locales?: LocaleResource[]
  video?: string;
  external: boolean;
  handle?: string;
  type: string;
}
