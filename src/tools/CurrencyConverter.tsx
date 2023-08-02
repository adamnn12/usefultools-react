import React, { useState, useEffect } from "react";
import {
  TextField,
  Select,
  MenuItem,
  Grid,
  Paper,
  InputLabel,
  FormControl,
  Button
} from "@mui/material";

const CurrencyConverter: React.FC = () => {
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [inputCurrency, setInputCurrency] = useState<string>("USD");
  const [outputCurrency, setOutputCurrency] = useState<string>("EUR");
  const [inputValue, setInputValue] = useState<number>(0);
  const [convertedValue, setConvertedValue] = useState<number>(0);

//   useEffect(() => {
//     // Fetch the list of available currencies
//     fetch("https://api.example.com/currencies")
//       .then((response) => response.json())
//       .then((data) => setCurrencies(data.currencies));
//   }, []);
  const handleConvert = () => {
    return;
    // fetch(
    //   `https://api.example.com/convert?from=${inputCurrency}&to=${outputCurrency}&value=${inputValue}`
    // )
    //   .then((response) => response.json())
    //   .then((data) => setConvertedValue(data.convertedValue));
  };
  return (
    <Paper style={{ padding: "16px" }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Value"
            variant="outlined"
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(parseFloat(e.target.value))}
          />
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Input Currency</InputLabel>
            <Select
              value={inputCurrency}
              onChange={(e) => setInputCurrency(e.target.value as string)}
              label="Input Currency"
            >
              {currencies.map((currency) => (
                <MenuItem value={currency} key={currency}>
                  {currency}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Converted Value"
            variant="outlined"
            value={convertedValue}
            disabled
          />
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Output Currency</InputLabel>
            <Select
              value={outputCurrency}
              onChange={(e) => setOutputCurrency(e.target.value as string)}
              label="Output Currency"
            >
              {currencies.map((currency) => (
                <MenuItem value={currency} key={currency}>
                  {currency}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleConvert}>
            Convert
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CurrencyConverter;
