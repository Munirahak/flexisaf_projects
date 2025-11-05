import { render, screen, fireEvent } from "@testing-library/react";
import Greeting from "../components/Greeting";

test("renders default greeting message", () => {
  render(<Greeting />);
  expect(screen.getByText(/Hello Guest/i)).toBeInTheDocument();
});

test("updates greeting message when user types name", () => {
  render(<Greeting />);
  const input = screen.getByPlaceholderText(/Enter your name/i);
  fireEvent.change(input, { target: { value: "Munirah" } });
  expect(screen.getByText(/Hello Munirah/i)).toBeInTheDocument();
});
