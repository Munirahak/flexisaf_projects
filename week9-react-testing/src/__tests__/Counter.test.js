import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

test("renders counter and buttons correctly", () => {
  render(<Counter />);
  const counterText = screen.getByText(/Counter Value:/i);
  expect(counterText).toBeInTheDocument();
});

test("increments and decrements count value", () => {
  render(<Counter />);
  const increaseBtn = screen.getByText(/Increase/i);
  const decreaseBtn = screen.getByText(/Decrease/i);

  fireEvent.click(increaseBtn);
  expect(screen.getByText(/Counter Value: 1/i)).toBeInTheDocument();

  fireEvent.click(decreaseBtn);
  expect(screen.getByText(/Counter Value: 0/i)).toBeInTheDocument();
});
