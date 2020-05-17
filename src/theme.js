import { createMuiTheme } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

// export const theme = createMuiTheme({
//   pallate: {
//     primary: {
//       main: "#84dcc6",
//       dark: "#8ee3d0",
//       light: "#9feee2",
//     },
//     secondary: {
//       main: "#538B6B",
//       dark: "#112D15",
//       light: "#95E8C1",
//     },
//     error: {
//       main: "#A23436",
//       dark: "#580A0B",
//       light: "#FF686B",
//     },
//   },
// });

// export const theme = createMuiTheme({
//   palette: {
//     primary: {
//       // Purple and green play nicely together.
//       main: purple[500],
//       dark: purple[800],
//       light: purple[100],
//     },
//     secondary: {
//       // This is green.A700 as hex.
//       main: "#11cb5f",
//     },
//   },
// });

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#57c3e7",
      main: "#2c9dc2",
      dark: "#1a768f",
      contrastText: "#fff",
    },
    secondary: {
      light: "#83cb92",
      main: "#3b934e",
      dark: "#246231",
      contrastText: "#fff",
    },
  },
});
