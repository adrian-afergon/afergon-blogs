import * as React from 'react';
import './SearchBar.scss';
import { TextFilter } from "../TextFilter";
import { TypeFilter } from "../TypeFilter";

interface SearchBarProps {
  types: string[],
  onChangeSelectedTypes: (selectedTypes: string[]) => void
  onChangeFilter: (value: string) => void
}

export const SearchBar: React.FC<SearchBarProps> = ({
  types,
  onChangeSelectedTypes,
  onChangeFilter
}) => {
  return (
    <section className="SearchBar">
      <TypeFilter types={types} onChangeSelectedTypes={onChangeSelectedTypes} />
      <TextFilter onChangeFilter={onChangeFilter} />
    </section>
  );
};
