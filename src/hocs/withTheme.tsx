import { CssBaseline, GeistProvider } from "@geist-ui/react";
import { FC, useCallback, useState } from "react";
import { ThemeComponentProps } from "../types";
import { getTheme, saveTheme } from "../utils";

export function withTheme(Component: FC<ThemeComponentProps>): FC {
  return function WithThemeComponent() {
    const [themeType, setThemeType] = useState(getTheme());

    const switchThemes = useCallback(() => {
      setThemeType((lastThemeType) => {
        const nextTheme = lastThemeType === "dark" ? "light" : "dark";
        saveTheme(nextTheme);
        return nextTheme;
      });
    }, []);

    return (
      <GeistProvider theme={{ type: themeType }}>
        <CssBaseline />
        <Component onSwitchTheme={switchThemes} />
      </GeistProvider>
    );
  };
}
