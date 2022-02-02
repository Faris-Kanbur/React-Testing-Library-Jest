import { render, screen } from "@testing-library/react";

import Options from "../Options";

test("display image for each scoop options from server", async () => {
  render(<Options optionType="scoops" />);

  //find image
  // more than one image so that i get "getAllByRole" but here is connections are almost always asynchronous so we are going use "findAllByRole"
  const scoopImages = await screen.findAllByRole("img", {
    name: /scoop$/i,
  });
  expect(scoopImages).toHaveLength(2);

  //confirm alt text of image
  const altText = scoopImages.map((element) => element.alt);

  //we are going to get array of object so we write "toEqual"
  expect(altText).toEqual("Chocolate scoop", "Vanilla scoop");
});