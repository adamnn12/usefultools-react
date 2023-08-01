import React from "react";
import { AppBar, Tabs, Tab, Box } from "@mui/material";
import { Tools } from "./types";

interface NavbarProps {
  onChangeView: (view: Tools) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onChangeView }) => {
  const [value, setValue] = React.useState<Tools>("calculator");

  const handleChange = (event: React.SyntheticEvent, newValue: Tools) => {
    setValue(newValue);
    onChangeView(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} textColor="secondary">
          <Tab label="Calculaltor" value="calculator" />
          <Tab label="Unit Converter" value="converter" />
          <Tab label="Color Picker" value='colorpicker' />
          <Tab label="File Converter" value='fileconverter' />
          <Tab label="Currency Converter" value='currencyexchanger' />
          <Tab label="Time Calculator" value='timecalculator' />
          <Tab label="Interest Rate Calculator" value='interestratecalculator' />
        </Tabs>
      </AppBar>
    </Box>
  );
};

export default Navbar;
