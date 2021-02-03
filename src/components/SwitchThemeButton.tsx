import { Button } from "@geist-ui/react";
import { Moon, Sun } from "@geist-ui/react-icons";
import { ReactElement } from "react";
import { getTheme } from "../utils";

type SwitchThemeButton = { onClick: () => void };

function SwitchThemeButton(props: SwitchThemeButton): ReactElement {
  const currentTheme = getTheme();
  return (
    <Button
      icon={currentTheme === "light" ? <Sun /> : <Moon />}
      onClick={props.onClick}
      size="small"
      type="secondary"
      ghost
      auto
    >
      {currentTheme}
    </Button>
  );
}

export default SwitchThemeButton;
