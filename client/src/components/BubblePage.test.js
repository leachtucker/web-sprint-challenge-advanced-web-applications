import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { getColors as mockGetColors } from '../api/getColors';

import { colors as mockColors } from '../data/colors';

jest.mock('../api/getColors');

test("Fetches data and renders the bubbles", async () => {
  // Finish this test

  mockGetColors.mockResolvedValueOnce({
    data: [...mockColors]
  });

  const { getByText } = render(<BubblePage />);

  await waitFor(() => expect(getByText(/aliceblue/i)));

  await waitFor(() => expect(getByText(mockColors[0].color)));
  await waitFor(() => expect(getByText(mockColors[1].color)));
  await waitFor(() => expect(getByText(mockColors[2].color)));
  await waitFor(() => expect(getByText(mockColors[3].color)));
  await waitFor(() => expect(getByText(mockColors[4].color)));
  await waitFor(() => expect(getByText(mockColors[5].color)));
  await waitFor(() => expect(getByText(mockColors[6].color)));
  await waitFor(() => expect(getByText(mockColors[7].color)));
  await waitFor(() => expect(getByText(mockColors[8].color)));
  await waitFor(() => expect(getByText(mockColors[9].color)));
  await waitFor(() => expect(getByText(mockColors[10].color)));
});
