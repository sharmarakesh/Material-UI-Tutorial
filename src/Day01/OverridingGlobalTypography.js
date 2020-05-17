import React from "react";
import {
  createMuiTheme,
  ThemeProvider,
  Typography,
  responsiveFontSizes,
  withStyles,
  Button,
} from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    // Tell Material-UI what the font-size on the html element is.
    htmlFontSize: 16,
    fontSize: 14,
    h1: {
      fontSize: 16,
    },
  },
  props: {
    // typography: {
    //   fontSize: "3rem",
    //   htmlFontSize: 2,
    // },
    MuiTypography: {
      variantMapping: {
        h1: "h2",
        h2: "h2",
        h3: "h2",
        h4: "h2",
        h5: "h2",
        h6: "h2",
        subtitle1: "h2",
        subtitle2: "h2",
        body1: "span",
        body2: "span",
      },
    },
  },
});

const StyledButton = withStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

export const OverridingGlobalTypography = () => {
  const handleClick = () => {
    alert("Hello form styled button");
  };
  return (
    <>
      <ThemeProvider theme={responsiveFontSizes(theme)}>
        <Typography variant="h1">h1 heading</Typography>
        <Typography variant="h2">h2 heading</Typography>
        <Typography variant="h3">h3 heading</Typography>
        <Typography>hello</Typography>
      </ThemeProvider>
      <StyledButton onClick={handleClick}>Styled Button withStyle</StyledButton>
    </>
  );
};
