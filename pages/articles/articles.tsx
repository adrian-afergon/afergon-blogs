import * as React from 'react';
import Head from 'next/head';
import './articles.scss';
import { SearchBar } from "../../src/components/SearchBar";
import { ArticleCard } from "../../src/components/ArticleCard";
import { Article } from "../../src/models/article";
import { Layout } from "../../src/components/Layout";
import { RepositoryContext } from "../../src/contexts/repositories.context";

export const Articles: React.FC = () => {
  const [articles, setArticles] = React.useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = React.useState<Article[]>([]);
  const [filter, setFilter] = React.useState<string>('');
  const [selectedTypes, setSelectedTypes] = React.useState<string[]>([]);
  const handleFilterChange = (value: string) => {
    setFilter(value)
  }

  const {postsRepository, talksRepository} = React.useContext(RepositoryContext)

  const articleIncludeText = (article: Article) => article.title
    .toLocaleLowerCase()
    .includes(filter.toLocaleLowerCase());

  const articleHasSelectedType = (article: Article) => selectedTypes.length === 0 || selectedTypes.includes(article.type)

  const matchFilters = (article: Article) => articleIncludeText(article) && articleHasSelectedType(article);

  React.useEffect(() => {
    Promise.all<Article[]>([
      postsRepository.getPosts(),
      talksRepository.getTalks()
    ]).then(([posts, talks]) => {
      setArticles([...posts, ...talks]);
      setFilteredArticles([...posts, ...talks]);
    });
  }, []);

  React.useEffect(() => {
    setFilteredArticles(articles
      .filter(matchFilters))
  }, [filter, selectedTypes]);

  return (
    <Layout>
      <Head>
        <title>Adrián Ferrera - Articles</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <SearchBar types={['Post', 'Talk']} onChangeSelectedTypes={setSelectedTypes} onChangeFilter={handleFilterChange} />
      <section className="articles">
        <ul>
          {filteredArticles.map((article) => (
            <li key={article.title}>
              <a
                href={article.link}
                target="_blank"
                rel="noreferrer"
              >
                <ArticleCard item={article} />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Articles;
