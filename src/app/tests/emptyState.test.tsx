import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UsersPage from "../page";

it("Shows empty state when no users match search", async () => {
  const user = userEvent.setup();
  render(<UsersPage />);

  const input = screen.getByRole("textbox", { name: /search/i });
  await user.type(input, "zzzzz{enter}");

  expect(await screen.findByText(/no users found/i)).toBeInTheDocument();
});

// User types in input
// Search is executed after enter
// Empty state is shown when no results match
