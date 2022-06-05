import { Theme } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const theme: Theme = {
  colors: {
    primary: "hotpink",
  },
};

export const MUItheme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
