import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Paper,
  Grid
} from "@mui/material";

const InterestRateCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [periods, setPeriods] = useState<number>(0);
  const [interestType, setInterestType] = useState<"simple" | "compound">(
    "simple"
  );
  const [finalValue, setFinalValue] = useState<number>(0);

  const calculateSimpleInterest = () => {
    return principal + (principal * rate * periods) / 100;
  };

  const calculateCompoundInterest = () => {
    return principal * Math.pow(1 + rate / 100, periods);
  };

  const handleCalculate = () => {
    if (interestType === "simple") {
      setFinalValue(calculateSimpleInterest());
    } else {
      setFinalValue(calculateCompoundInterest());
    }
  };

  return (
    <Paper style={{ padding: "16px" }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Principal"
            variant="outlined"
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(parseFloat(e.target.value))}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Rate (%)"
            variant="outlined"
            type="number"
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value))}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label="Periods"
            variant="outlined"
            type="number"
            value={periods}
            onChange={(e) => setPeriods(parseInt(e.target.value, 10))}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Type</InputLabel>
            <Select
              value={interestType}
              onChange={(e) =>
                setInterestType(e.target.value as "simple" | "compound")
              }
              label="Type"
            >
              <MenuItem value="simple">Simple Interest</MenuItem>
              <MenuItem value="compound">Compound Interest</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="primary" onClick={handleCalculate}>
            Calculate
          </Button>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Final Value"
            variant="outlined"
            value={finalValue.toFixed(2)}
            disabled
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default InterestRateCalculator;
