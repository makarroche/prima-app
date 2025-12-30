import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UsersPage from "../page";

describe("User filter", () => {
  it("Filters users by viewer role", async () => {
    const user = userEvent.setup();
    render(<UsersPage />);

    const input = screen.getByRole("textbox", { name: /search/i });
    await user.type(input, "to{enter}");

    const viewerFilterButton = await screen.findByRole("button", {
      name: /viewer/i,
    });

    await user.click(viewerFilterButton);

    expect(await screen.findByText(/marco esposito/i)).toBeInTheDocument();
    expect(screen.queryByText(/victor barnes/i)).toBeInTheDocument();
  });
});

// User types in input
// Search is executed after enter
// Filter by viewer role
// Correct results are rendered
// Only viewer users are shown
