import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Footer} from './index';

describe('Footer', () => {
  xit('should display the default message', () => {
    const renderResult: RenderResult = render(
      <Footer/>,
    );
    expect(renderResult.queryByText('Hello from Footer!')).toBeTruthy();
  });
});
