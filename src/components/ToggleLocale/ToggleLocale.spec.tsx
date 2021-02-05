import * as React from 'react';
import { RenderResult } from '@testing-library/react';
import { ToggleLocale } from './';
import { buildLocaleResource } from '../../_helpers/builders/build-locale-resource';
import { renderWithRouter } from '../../_helpers/renders/renderWithRouter';

describe('ToggleLocale', () => {
  it('should display the default message', () => {
    const firstLocale = buildLocaleResource({ locale: 'a locale' });
    const secondLocale = buildLocaleResource({ locale: 'a different locale' });
    const locales = [firstLocale, secondLocale];

    const view: RenderResult = renderWithRouter(
      <ToggleLocale locales={locales} />
    );

    locales.forEach((localeResource) => {
      expect(view.queryByText(localeResource.locale)).toBeInTheDocument();
    });
  });
});
