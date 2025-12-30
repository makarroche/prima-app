import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UsersPage from "../page";

describe("User details modal", () => {
  it("Opens modal when clicking view details", async () => {
    const user = userEvent.setup();
    render(<UsersPage />);

    const input = screen.getByRole("textbox", { name: /search/i });
    await user.type(input, "serena{enter}");

    const viewDetailsButton = await screen.findByRole("button", {
      name: /view details/i,
    });

    await user.click(viewDetailsButton);

    const dialog = await screen.findByRole("dialog");

    expect(dialog).toBeInTheDocument();

    expect(within(dialog).getAllByText(/serena/i).length).toBeGreaterThan(0);

    expect(within(dialog).getAllByText(/parisi/i).length).toBeGreaterThan(0);
  });
});

//// User types in input
// Search is executed after enter
// Correct results are rendered
// User clicks view details button
// Modal opens with user details
// User details are displayed correctly
