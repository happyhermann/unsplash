import { DefaultTheme } from "styled-components";

const size = {
  mobile: "768px",
  desktop: "770px",
  fullSize: "1200px",
};

export const theme: DefaultTheme = {
  bgColor: "white",
  bgDark: "#111",
  textColor: "#111",
  darkColor: "white",
  accentColor: "#1E9EFF",
  mobile: `(max-width: ${size.mobile})`,
  desktop: `(min-width: ${size.desktop})`,
  fullSize: `(min-width: ${size.fullSize})`,
  desktopPadding: `25px 100px`,
};
