import { CssBaseline, GeistProvider } from "@geist-ui/react";
import { FC, useCallback, useState } from "react";
import { ThemeComponentProps, ThemeType } from "../types";
import { getTheme, saveTheme } from "../utils";

export function withTheme(Component: FC<ThemeComponentProps>): FC {
  return function WithThemeComponent() {
    const [themeType, setThemeType] = useState<ThemeType>(getTheme());

    const switchThemes = useCallback(() => {
      setThemeType((lastThemeType: ThemeType) => {
        const nextTheme = lastThemeType === "dark" ? "light" : "dark";
        saveTheme(nextTheme);
        return nextTheme;
      });
    }, []);

    return (
      <GeistProvider themeType={themeType}>
        <CssBaseline />
        <Component onSwitchTheme={switchThemes} />
      </GeistProvider>
    );
  };
}
