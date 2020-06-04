import * as React from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhotoVideo,
} from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import './articles.scss';
import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";
import { Post } from "../src/models/post";
import { Talk } from "../src/models/talk";
import { postsRepository } from "../src/repositories/posts-repository";
import { talksRepository } from "../src/repositories/talks.repository";
import { SearchBar } from "../src/components/SearchBar";
import { ArticleCard } from "../src/components/ArticleCard";

const Home: React.FC = () => {
  const [talks, setTalks] = React.useState<Talk[]>([]);
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [filteredTalks, setFilteredTalks] = React.useState<Talk[]>([]);
  const [filteredPosts, setFilteredPosts] = React.useState<Post[]>([]);
  const [filter, setFilter] = React.useState<string>('');
  const [selectedTypes, setSelectedTypes] = React.useState<string[]>([]);
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value)
  }

  React.useEffect(() => {
    postsRepository.getPosts().then((data) => {setPosts(data); setFilteredPosts(data); });
    talksRepository.getTalks().then((data) => {setTalks(data); setFilteredTalks(data); });
  }, []);

  React.useEffect(() => {
    setFilteredPosts(posts.filter(post => post.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase())))
    setFilteredTalks(talks.filter(talk => talk.title.toLocaleLowerCase().includes(filter.toLocaleLowerCase())))
  }, [filter]);

  return (
    <div className="container">
      <Head>
        <title>Adrián Ferrera - Articles</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Header title={"Adrián Ferrera"}/>
      <SearchBar types={['Posts', 'Talks']} onChangeSelectedTypes={setSelectedTypes} onChangeFilter={handleFilterChange} />
      <main>
        <section className="posts">
        <p className="description">
          Temporary you can read my current posts in the following links:
        </p>
        <ul>
          {filteredPosts.map((post) => (
            <li key={post.title}>
              <a
                href={post.link}
                target="_blank"
                rel="noreferrer"
              >
                <ArticleCard item={post} />
              </a>
            </li>
          ))}
        </ul>
        </section>
        <p className="description">Or you can check my talks :</p>
        <ul>
          {filteredTalks.map((talk) => (
            <li key={talk.title}>
              <a
                href={talk.video ? talk.video : talk.slides}
                target="_blank"
                rel="noreferrer"
              >
                {talk.title}
                <FontAwesomeIcon
                  icon={talk.video ? faYoutube : faPhotoVideo}
                  size="xs"
                />
              </a>
            </li>
          ))}
        </ul>
      </main>

      <Footer/>
    </div>
  );
};

export default Home;
