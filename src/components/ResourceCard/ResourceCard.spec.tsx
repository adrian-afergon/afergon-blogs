import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ResourceCard} from './';

describe('ResourceCard', () => {
  it('should display the default message', () => {
    const view: RenderResult = render(
      <ResourceCard/>,
    );
    expect(view.queryByText('Hello from ResourceCard!')).toBeTruthy();
  });
});
