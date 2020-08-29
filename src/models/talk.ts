export interface Talk {
  title: string;
  intro: string;
  places: string[];
  date: Date;
  locale: string;
  link: string;
  video?: string;
  external: boolean;
  handle?: string;
  type: string;
}
