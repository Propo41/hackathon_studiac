import PropTypes from "prop-types";
import { useMemo } from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import shape from "./shape";
import palette from "./palette";
import typography from "./typography";
import GlobalStyles from "./globalStyles";

// ----------------------------------------------------------------------

ThemeConfig.propTypes = {
  children: PropTypes.node,
};

export default function ThemeConfig({ children }) {
  const themeOptions = useMemo(
    () => ({
      palette,
      shape,
      typography,
    }),
    []
  );

  const theme = createTheme(themeOptions);
  //theme.components = componentsOverride(theme);

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StylesProvider>
  );
}
