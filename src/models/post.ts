export interface Post {
  title: string;
  intro: string;
  date: Date | string;
  locale: string;
  link: string;
  external: boolean;
  handle?: string;
}
