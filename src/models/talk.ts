export interface Talk {
  title: string;
  intro: string;
  places: string[];
  date: Date | string;
  locale: string;
  slides: string;
  video: string;
  external: boolean;
  handle?: string;
}
