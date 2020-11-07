import React from "react";
import { render, screen } from "@testing-library/react";
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

  await expect(getByText(/aliceblue/i));

});
