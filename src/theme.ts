import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#AEDFF7', // Lighter shade of blue that works well with black text
      contrastText: '#000000', // This ensures that text on primary color is black
    },
    secondary: {
      main: '#32A89D',
    },
    error: {
      main: '#FF5733',
    },
    background: {
      default: '#F4F4F4',
    },
    text: {
      primary: '#333333',
    },
    action: {
      active: '#FFC107',
    },
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    h1: {
      fontFamily: "'Roboto Condensed', sans-serif"
    },
    h2: {
      fontFamily: "'Roboto Condensed', sans-serif"
    },
    h3: {
      fontFamily: "'Roboto Condensed', sans-serif"
    },
    button: {
      fontFamily: "'Roboto Bold', sans-serif"
    }
  }
});
