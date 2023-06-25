import React from 'react';
import {PodcastPage} from "@/views/podcast/index";
import {render, screen} from "@testing-library/react";
import {vi} from "vitest";
import {Podcast} from "@/lib/podcast/domain/podcast";

describe('Podcast Page', function () {

  it('loads more podcast when button is clicked', function () {
    const onLoadMoreMock = vi.fn(async (): Promise<Podcast[]> => []);

    render(<PodcastPage
      episodes={[]}
      onLoadMore={onLoadMoreMock}
    />)


    screen.getByRole('button', {name: /loadMore/i}).click()

    expect(onLoadMoreMock).toHaveBeenCalled()

  });

});
