import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ResourceCard} from './ResourceCard';
import { Resource } from "../../models/resource";
import { buildResource } from "../../_helpers/builders/build-resource";

describe('ResourceCard', () => {
  it('should display the default message', () => {
    const resource: Resource = buildResource({});
    const view: RenderResult = render(
      <ResourceCard resource={resource}/>,
    );
    expect(view.queryByText(resource.title)).toBeInTheDocument();
  });
});
