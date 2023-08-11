import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NavigationDrawer from './components/NavigationDrawer'; // Importing the new component
import { Calculator, ColorPicker, CurrencyConverter, FileConverter, InterestRateCalculator, UnitConverter } from './tools';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
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
      <div>
        <IconButton edge="start" color="inherit" onClick={handleDrawerOpen}>
          <MenuIcon />
        </IconButton>

        <NavigationDrawer open={openDrawer} onClose={handleDrawerClose} />

        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/unitconverter" element={<UnitConverter />} />
          <Route path="/colorpicker" element={<ColorPicker />} />
          <Route path="/currencyexchanger" element={<CurrencyConverter />} />
          <Route path="/fileconverter" element={<FileConverter />} />
          <Route path="/timecalculator" element={<About />} />
          <Route path="/interestratecalculator" element={<InterestRateCalculator />} />
        </Routes>
      </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
