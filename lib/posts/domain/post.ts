export interface Post {
  title: string;
  summary: string;
  date: number;
  locales: string[]
  link: string;
  external: boolean;
  handle?: string;
  tags: string[];
  hrefLang: Record<string, string>
}
