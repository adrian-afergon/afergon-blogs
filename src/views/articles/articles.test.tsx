import React from "react";
import Articles from "@/views/articles/articles";
import {fireEvent, render, screen} from "@testing-library/react";
import {buildArticle} from "@/_helpers/builders/build-article";

describe('Articles', () => {
  it('displays all articles', () => {
    const articles = [
      buildArticle({title: 'an article', locales: []}),
      buildArticle({title: 'another article', locales: []})
    ]
    render(<Articles articles={articles}/>)

    screen.getByRole('listitem', {name: `${articles[0].locales[0]} - ${articles[0].title}`})
    screen.getByRole('listitem', {name: `${articles[1].locales[0]} - ${articles[1].title}`})
  })

  const filterByTypes = (typeNames: string[]) => {
    fireEvent.click(screen.getByRole('button', {name: 'components.filter.text'}))
    typeNames.forEach(typeName => fireEvent.click(screen.getByRole('checkbox', {name: typeName})))
  };

  it('displays articles filtered by type', () => {
    const articles = [
      buildArticle({title: 'an article', locales: [], type: 'Talk'}),
      buildArticle({title: 'another article', locales: [], type: 'Post'})
    ]
    render(<Articles articles={articles}/>)
    filterByTypes(['types.talk']);

    screen.getByRole('listitem', {name: `${articles[0].locales[0]} - ${articles[0].title}`})
    expect(screen.queryByRole('listitem', {name: `${articles[1].locales[0]} - ${articles[1].title}`})).not.toBeInTheDocument()
  });

  it('displays articles filtered by text', () => {
    const articles = [
      buildArticle({title: 'an article', locales: [], type: 'Talk'}),
      buildArticle({title: 'another article', locales: [], type: 'Post'})
    ]
    render(<Articles articles={articles}/>)
    fireEvent.change(screen.getByPlaceholderText('components.search.placeholder'), {target: {value: 'another'}})

    screen.getByRole('listitem', {name: `${articles[1].locales[0]} - ${articles[1].title}`})
    expect(screen.queryByRole('listitem', {name: `${articles[0].locales[0]} - ${articles[0].title}`})).not.toBeInTheDocument()
  });

})
