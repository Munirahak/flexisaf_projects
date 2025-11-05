import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("renders Greeting and Counter together", () => {
  render(<App />);

  // Both components are visible
  expect(screen.getByText(/React Testing Demo - Week 9/i)).toBeInTheDocument();
  expect(screen.getByText(/Hello Guest/i)).toBeInTheDocument();
  expect(screen.getByText(/Counter Value:/i)).toBeInTheDocument();

  // Simulate typing name
  fireEvent.change(screen.getByPlaceholderText(/Enter your name/i), {
    target: { value: "Amina" },
  });
  expect(screen.getByText(/Hello Amina/i)).toBeInTheDocument();

  // Simulate increment
  fireEvent.click(screen.getByText(/Increase/i));
  expect(screen.getByText(/Counter Value: 1/i)).toBeInTheDocument();
});
