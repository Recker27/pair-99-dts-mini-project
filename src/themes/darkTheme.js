import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#181818",
    },
    secondary: {
      main: "#b9090b",
    },
    text: {
      primary: "#ffffff",
      secondary: "rgba(255,255,255,0.3)",
      disabled: "#e5e5e5",
      hint: "#ffffff",
    },
    background: {
      default: "#181818",
      paper: "#181818",
    },
  },
});

export default darkTheme;
