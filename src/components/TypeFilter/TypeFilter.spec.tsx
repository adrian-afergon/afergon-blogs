import * as React from 'react';
import { fireEvent, render, RenderResult } from "@testing-library/react";
import { TypeFilter} from './';
import { TypeFilterText } from "./TypeFilter";

describe('TypeFilter', () => {

  let view: RenderResult;
  let modal: HTMLElement|null;
  let onChangeTypesMock: (selectedTypes: string[]) => void;
  const types: string[] = ['irrelevant type']

  const toggleModal = () => {
    const button = view.getByRole('button');
    fireEvent.click(button);
  }

  const toggleCheckbox = (value: string) => {
    const checkbox = view.getByLabelText(value);
    fireEvent.click(checkbox);
  }

  beforeEach(() => {
    onChangeTypesMock = jest.fn();
    view = render(
      <TypeFilter
        types={types}
        onChangeSelectedTypes={onChangeTypesMock}
      />,
    );
  })

  it('starts with modal hidden', () => {
    modal = view.queryByLabelText(TypeFilterText.filterModal);
    expect(modal).not.toBeInTheDocument();
  });

  it('show the menu when is clicked', () => {
    toggleModal();
    modal = view.queryByLabelText(TypeFilterText.filterModal)
    expect(modal).toBeInTheDocument();
  });

  it("hides the menu when is clicked again", () => {
    toggleModal(); // open
    toggleModal(); // close
    modal = view.queryByLabelText(TypeFilterText.filterModal)
    expect(modal).not.toBeInTheDocument();
  });

  xit("hides the menu when is clicked over", () => {
    toggleModal(); // open
    toggleModal(); // close
    modal = view.queryByLabelText(TypeFilterText.filterModal)
    expect(modal).not.toBeInTheDocument();
  });

  it('add the applied types when click on', () => {
    const selectedValue = types[0];
    toggleModal(); // open
    toggleCheckbox(selectedValue);
    expect(onChangeTypesMock).toHaveBeenCalledWith([selectedValue]);
  });

  it('remove the type when a marked type is clicked', () => {
    const selectedValue = types[0];
    toggleModal(); // open
    toggleCheckbox(selectedValue); // select
    toggleCheckbox(selectedValue); // unselect
    expect(onChangeTypesMock).toHaveBeenCalledWith([]);
  });

});
