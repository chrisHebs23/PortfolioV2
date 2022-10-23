import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("on hire me button click open contact overlay", async () => {
  render(<App />);

  // contact overlay starts off hidden
  const overlay = screen.queryByText(
    "Need a website? I would love to help bring that website to life!"
  );

  expect(overlay).not.toBeInTheDocument();

  // click button to open overlay
  const hireMeButton = await screen.findByRole("button", { name: /hire me/i });
  await userEvent.click(hireMeButton);

  // find overlay
  const overlayOpen = screen.queryByText(
    "Need a website? I would love to help bring that website to life!"
  );
  expect(overlayOpen).toBeInTheDocument();
});
