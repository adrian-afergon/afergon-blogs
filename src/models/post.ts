import { LocaleResource } from "./locale-resource";

export interface Post {
  title: string;
  intro: string;
  date: Date;
  locale: string;
  locales?: LocaleResource[]
  link: string;
  external: boolean;
  handle?: string;
  type: string;
}

