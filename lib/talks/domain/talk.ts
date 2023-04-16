export interface Talk {
  title: string;
  summary: string;
  places: string[];
  date: number;
  locale: string;
  link: string;
  locales: string[]
  video?: string;
  external: boolean;
  handle?: string;
  tags: string[];
  hrefLang?: {[key: string]: string}
}
