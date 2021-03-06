import { LocaleResource } from './locale-resource'

export interface Talk {
  title: string;
  intro: string;
  places: string[];
  date: Date;
  locale: string;
  link: string;
  locales?: LocaleResource[]
  video?: string;
  external: boolean;
  handle?: string;
  type: string;
}
