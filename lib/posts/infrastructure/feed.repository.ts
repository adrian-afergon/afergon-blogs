import {Feed} from "feed";
import * as fs from "fs";
import {PostsFactoryRepository} from "@/lib/posts/infrastructure/posts.factory.repository";

export const generateRssFeed = async () => {
  const posts = await PostsFactoryRepository.getInstance().getPosts();
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
    image: `${siteURL}/images/profile.jpg`,
    favicon: `${siteURL}/favicon.ico`,
    copyright: `All rights reserved ${date.getFullYear()}, Adrián Ferrera`,
    updated: date,
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`,
      json: `${siteURL}/rss/feed.json`,
      atom: `${siteURL}/rss/atom.xml`,
    },
    author,
  });
  posts.forEach((post) => {
    const url = post.external ? post.link : `${siteURL}/${post.link}`;
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
      date: new Date(post.date * 1000),
    });
  });

  fs.mkdirSync("./public/rss", {recursive: true});
  fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
};
