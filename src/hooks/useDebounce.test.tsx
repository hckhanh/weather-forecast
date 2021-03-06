import { act, render, screen } from "@testing-library/react";
import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

function TestComponent() {
  const [value, setValue] = useState("1");
  const debounceValue = useDebounce(value, 3000);

  useEffect(() => {
    setTimeout(() => {
      setValue("2");
    }, 2000);
  }, []);

  return <div>{debounceValue}</div>;
}

describe("useDebounce", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  test("not updates value within 5s", async () => {
    render(<TestComponent />);
    act(() => {
      jest.advanceTimersByTime(4000);
    });

    const textElement = screen.queryByText("2");
    expect(textElement).toBeNull();
  });

  test("updates value after 5s", async () => {
    render(<TestComponent />);
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    const textElement = await screen.findByText("2");
    expect(textElement).not.toBeNull();
    expect(textElement).toBeInTheDocument();
  });
});
