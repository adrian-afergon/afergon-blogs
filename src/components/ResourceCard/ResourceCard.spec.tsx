import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ResourceCard} from './ResourceCard';
import { Resource } from "../../models/resource";

const buildResource = ({
  date = 'irrelevant date',
  external = false,
  image = 'irrelevant url',
  link = 'irrelevant link',
  title = 'irrelevant title',
}: Partial<Resource>): Resource => ({
  link,
  date,
  external,
  image,
  title,
});

describe('ResourceCard', () => {
  it('should display the default message', () => {
    const resource: Resource = buildResource({});
    const view: RenderResult = render(
      <ResourceCard resource={resource}/>,
    );
    expect(view.queryByText(resource.title)).toBeInTheDocument();
  });
});
