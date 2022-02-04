import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { server } from "../../../mocks/server";

import OrderEntry from "../OrderEntry";

test("Handles errors for scoops and toppings routes", async () => {
  //This function accepts an optional list of request handlers to override the initial handlers to re-declare the mock definition completely on runtime.
  server.resetHandlers(
    rest.get("http://localhost:3030/scoops", (req, res, ctx) =>
      res(ctx.status(500))
    ),
    rest.get("http://localhost:3030/toppings", (req, res, ctx) =>
      res(ctx.status(500))
    )
  );
  render(<OrderEntry />);
// add "await"
  waitFor(async () => {
    const alerts = await screen.findAllByRole("alert", {
      name: "An unexpected error ocurred. Please try again later",
    });
    expect(alerts).toHaveLength(2);
  });
});
