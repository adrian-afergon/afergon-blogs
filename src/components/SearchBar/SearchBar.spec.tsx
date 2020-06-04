import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { SearchBar} from './';

describe('SearchBar', () => {
  it('should display the default message', () => {
    const view: RenderResult = render(
      <SearchBar/>,
    );
    expect(view.queryByText('Hello from SearchBar!')).toBeTruthy();
  });
});
