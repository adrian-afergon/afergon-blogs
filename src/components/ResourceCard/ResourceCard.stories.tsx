import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { ResourceCard } from './ResourceCard'
import { buildResource } from "../../_helpers/builders/build-resource";

const stories = storiesOf('ResourceCard', module);
stories.addDecorator(withKnobs);

stories.add('with message', () => {
  const resource = buildResource({
    title: text('title value', 'Resource')
  });
  return (
      <ResourceCard resource={resource}/>
  );
});
