import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
    palette: {
      primary: {
        main: '#004F78',
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
        fontFamily: "'Roboto Condensed', sans-serif",
      },
      h2: {
        fontFamily: "'Roboto Condensed', sans-serif",
      },
      h3: {
        fontFamily: "'Roboto Condensed', sans-serif",
      },
      button: {
        fontFamily: "'Roboto Bold', sans-serif",
      },
    },
    overrides: {
      MuiButton: {
        root: {
          backgroundColor: '#FFC107',
          '&:hover': {
            backgroundColor: '#32A89D',
          },
        },
        // Any other default styles for different button variants can be added here
      },
      // You can add overrides for other components here as well
    },
    props: {
      // Default props for components can be defined here
      MuiButton: {
        disableRipple: true, // as an example
      },
    },
  });