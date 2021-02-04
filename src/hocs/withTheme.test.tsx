import { Button } from "@geist-ui/react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeComponentProps } from "../types";
import { withTheme } from "./withTheme";

function TestComponent(props: ThemeComponentProps) {
  return <Button onClick={props.onSwitchTheme}>Switch theme</Button>;
}

const TestThemeComponent = withTheme(TestComponent);

describe("withTheme", () => {
  test("switch to dark theme when the button is clicked", async () => {
    render(<TestThemeComponent />);
    userEvent.click(screen.getByText(/switch theme/i));

    const theme = localStorage.getItem("theme");
    expect(theme).toBe("dark");
  });
});
