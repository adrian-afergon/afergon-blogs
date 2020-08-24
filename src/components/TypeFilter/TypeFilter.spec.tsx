import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { TypeFilter} from './';

describe('TypeFilter', () => {
  it('should display the default message', () => {
    const view: RenderResult = render(
      <TypeFilter/>,
    );
    expect(view.queryByText('Hello from TypeFilter!')).toBeInTheDocument();
  });
});
