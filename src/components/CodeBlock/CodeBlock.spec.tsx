import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { CodeBlock} from './index';

describe('CodeBlock', () => {
  it('should display the default message', () => {
    const code='irrelevant code fragment';
    const view: RenderResult = render(
      <CodeBlock language={'javascript'} value={code}/>,
    );
    expect(view.queryByText(code)).toBeInTheDocument();
  });
});
