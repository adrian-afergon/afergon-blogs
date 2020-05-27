import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Header } from './index';

describe('Header', () => {
  it('has a title', () => {
    const title = 'irrelevant title'
    const view: RenderResult = render(<Header title={title}/>);

    expect(view.queryByText(title)).toBeInTheDocument();
  });
});
