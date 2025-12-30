import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UsersPage from "../page";

describe("User search", () => {
  it("Search users by name", async () => {
    const user = userEvent.setup();
    render(<UsersPage />);

    const input = screen.getByRole("textbox", { name: /search/i });

    await user.type(input, "ar{enter}");

    expect(await screen.findByText(/serena parisi/i)).toBeInTheDocument();
    expect(await screen.findByText(/marco esposito/i)).toBeInTheDocument();
  });
});

// User types in input
// Search is executed after enter
// Correct results are rendered
