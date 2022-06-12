import { Feed } from "feed";
import { getBlogPostsData } from "./posts.repository";
import * as fs from "fs";

export const generateRssFeed = async () => {
  const posts = await getBlogPostsData();
  const siteURL = process.env.SITE_URL || 'https://adrianferrera.com';
  const date = new Date();
  const author = {
    name: "Adrián Ferrera",
    email: "adrian.afergon@gmail.com",
    link: "https://adrianferrera.com",
  };
  const feed = new Feed({
    title: "Adrián Ferrera blog",
    description: "",
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/logo.svg`,
    favicon: `${siteURL}/favicon.png`,
    copyright: `All rights reserved ${date.getFullYear()}, Adrián Ferrera`,
    updated: date,
    generator: "Feed for Node.js",
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`,
      json: `${siteURL}/rss/feed.json`,
      atom: `${siteURL}/rss/atom.xml`,
    },
    author,
  });
  posts.forEach((post) => {
    const url = `${siteURL}/blog/${post.slug}`;
    feed.addItem({
      // @ts-ignore
      title: post.title,
      id: url,
      link: url,
      // @ts-ignore
      description: post.summary,
      // @ts-ignore
      content: post.summary,
      author: [author],
      contributor: [author],
      // @ts-ignore
      date: new Date(post.publishedAt),
    });
  });

  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
  //fs.writeFileSync("./public/rss/atom.xml", feed.atom1());
  //fs.writeFileSync("./public/rss/feed.json", feed.json1());
};