import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./components/App";

test("renders complete app", () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText(
    /Search by location name.../i,
  );
  expect(searchInput).toBeInTheDocument();
});

test("searches input receive query 'Ho Chi Minh' and show results", async () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText(
    /Search by location name.../i,
  );
  userEvent.type(searchInput, "Ho Chi Minh");

  const option = await screen.findByText(/Ho Chi Minh City/i);
  userEvent.click(option);

  const mondayTitle = await screen.findByText("Monday");
  const thursdayTitle = await screen.findByText("Thursday");
  const sundayTitle = await screen.findByText("Sunday");

  expect(mondayTitle).toBeInTheDocument();
  expect(thursdayTitle).toBeInTheDocument();
  expect(sundayTitle).toBeInTheDocument();
});

test("switches from light to dark theme", async () => {
  render(<App />);
  const switchThemeButton = screen.getByText(/Light/i);
  userEvent.click(switchThemeButton);

  expect(switchThemeButton.textContent).toEqual(expect.stringMatching(/Dark/i));
  expect(localStorage.getItem("theme")).toBe("dark");
});
