---
to: <%= path %>/<%= name %>/<%= name %>.spec.tsx
---
import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { <%= name %>} from './<% name %>';

describe('<%= name %>', () => {
  it('should display the default message', () => {
    const view: RenderResult = render(
      <<%= name %>/>,
    );
    expect(view.queryByText('Hello from <%= name %>!')).toBeInTheDocument();
  });
});
