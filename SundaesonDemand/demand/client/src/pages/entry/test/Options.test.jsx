import { render, screen } from "@testing-library/react";

import Options from "../Options";

test("Display image for each scoop options from server", async () => {
  render(<Options optionType="scoops" />);

  //find image
  // more than one image so that i get "getAllByRole" but here is connections are almost always asynchronous so we are going use "findAllByRole"
  const scoopImages = await screen.findAllByRole("img", {
    name: /scoop$/i,
  });
  expect(scoopImages).toHaveLength(2);

  //confirm alt text of image
  const altText = scoopImages.map((img) => img.alt);

  //we are going to get array of object so we write "toEqual"
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("Displays image for each toppings option from server", async () => {
  // Mock Service Worker will return three toppings from server
  render(<Options optionType="toppings" />);

  // find images, expect 3 based on what msw returns
  const images = await screen.findAllByRole("img", { name: /topping$/i });
  expect(images).toHaveLength(3);

  // check the actual alt text for the images
  // @ts-ignore
  const imageTitles = images.map((img) => img.alt);
  expect(imageTitles).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});
