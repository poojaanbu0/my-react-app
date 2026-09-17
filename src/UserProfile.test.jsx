import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserProfile from "./UserProfile";

test("displays the user's name", () => {

  render(<UserProfile />);

  const name = screen.getByText("Name: Pooja");

  expect(name).toBeInTheDocument();

});