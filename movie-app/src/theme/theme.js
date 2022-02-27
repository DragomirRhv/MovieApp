import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#594c4b",
    },
    secondary: {
      main: "#fff",
    },
    text: {
      primary: "#606160",
    },
  },
  typography: {
    fontFamily: "Lato",
  },
  shadows: [
    "none",
    "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
    "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
    "rgba(0, 0, 0, 0.2) 0px 2px 4px, rgba(0, 0, 0, 0.2) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
    "none",
    "0px 15px 60px rgba(16, 49, 109, 0.25)", // styled shadow
    "0px 15px 60px rgba(16, 49, 109, 0.1)", // shadow light
    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
    "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
  ],
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label": {
            color: "#594c4b",
          },
          "& label.Mui-focused": {
            color: "#594c4b",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "#594c4b",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#594c4b",
            },
            "&:hover fieldset": {
              borderColor: "#594c4b",
              borderWidth: "0.15rem",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#594c4b",
            },
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          textTransform: "initial",
          fontSize: "1rem",
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
