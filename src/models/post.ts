export interface Post {
  title: string;
  intro: string;
  date: Date;
  locale: string;
  link: string;
  external: boolean;
  handle?: string;
  type: string;
}
