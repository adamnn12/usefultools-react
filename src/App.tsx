import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationDrawer from "./components/NavigationDrawer"; // Importing the new component
import {
  Calculator,
  ColorPicker,
  CurrencyConverter,
  FileConverter,
  InterestRateCalculator,
  UnitConverter
} from "./tools";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import Footer from "./components/Footer";
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Container, IconButton } from "@mui/material";

function About() {
  return <div>About Content</div>;
}

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Box
          display="flex"
          flexDirection="column"
          minHeight="100vh"
          justifyContent="space-between"
        >
          <Container component="main" maxWidth="lg" disableGutters={true}>
            <IconButton color="inherit" onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
            <NavigationDrawer open={openDrawer} onClose={handleDrawerClose} />
            <Routes>
              <Route path="/" element={<Calculator />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/unitconverter" element={<UnitConverter />} />
              <Route path="/colorpicker" element={<ColorPicker />} />
              <Route
                path="/currencyexchanger"
                element={<CurrencyConverter />}
              />
              <Route path="/fileconverter" element={<FileConverter />} />
              <Route path="/timecalculator" element={<About />} />
              <Route
                path="/interestratecalculator"
                element={<InterestRateCalculator />}
              />
            </Routes>
          </Container>
          <Box component="footer" py={1} bgcolor="primary.main" color="white">
            <Footer />
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
