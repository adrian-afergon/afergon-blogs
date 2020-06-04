import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Layout} from './';

describe('Layout', () => {
  it('should display the default message', () => {
    const view: RenderResult = render(
      <Layout/>,
    );
    expect(view.queryByText('Hello from Layout!')).toBeTruthy();
  });
});
