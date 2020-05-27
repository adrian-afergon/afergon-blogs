import * as React from 'react';
import { fireEvent, render, RenderResult } from "@testing-library/react";
import { Header } from './index';

describe('Header', () => {
  const title = 'irrelevant title';

  it('has a title', () => {
    const view: RenderResult = render(<Header title={title}/>);
    expect(view.queryByText(title)).toBeInTheDocument();
  });

  describe('menu', () => {
    beforeEach(() => {
      window.resizeTo = function resizeTo(width, height) {
        Object.assign(this, {
          innerWidth: width,
          innerHeight: height,
          outerWidth: width,
          outerHeight: height,
        }).dispatchEvent(new this.Event('resize'))
      }
    });

    it("display the menu-button when is an small screen", () => {
      window.resizeTo(10, 10);
      const view = render(<Header title={title} />);
      expect(view.queryByLabelText('menu')).toBeInTheDocument();
    });

    it("hides the menu-button when is a large screen", () => {
      window.resizeTo(1000, 1000);
      const view = render(<Header title={title} />);
      expect(view.queryByLabelText('menu')).not.toBeInTheDocument();
    });

    it("shows the navigation bar when is hided and menu-button is clicked", function() {
      window.resizeTo(10, 10);
      const view = render(<Header title={title} />);
      const menuButton = view.getByLabelText('menu');
      fireEvent.click(menuButton);

      expect(view.queryByRole('navigation')).toBeInTheDocument()
    });

    it("hides the navigation bar when is showed menu-button is clicked", function() {
      window.resizeTo(10, 10);
      const view = render(<Header title={title} />);
      const menuButton = view.getByLabelText('menu');
      fireEvent.click(menuButton);
      fireEvent.click(menuButton);

      expect(view.queryByRole('navigation')).not.toBeInTheDocument()
    });
  });

});
