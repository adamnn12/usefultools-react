import React, { useState } from "react";
import { Button, TextField, Grid, Paper } from "@mui/material";

const Calculator: React.FC = () => {
  const [input, setInput] = useState("");
  const [firstValue, setFirstValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);

  const handleNumberClick = (number: number) => {
    setInput(input + number.toString());
  };

  const handleOperatorClick = (op: string) => {
    if (input) {
      setFirstValue(parseFloat(input));
      setOperator(op);
      setInput("");
    }
  };

  const handleEqualClick = () => {
    if (firstValue !== null && operator && input) {
      let result = 0;

      switch (operator) {
        case "+":
          result = firstValue + parseFloat(input);
          break;
        case "-":
          result = firstValue - parseFloat(input);
          break;
        case "*":
          result = firstValue * parseFloat(input);
          break;
        case "/":
          result = firstValue / parseFloat(input);
          break;
      }

      setInput(result.toString());
      setFirstValue(null);
      setOperator(null);
    }
  };

  const handleClearClick = () => {
    setInput("");
    setFirstValue(null);
    setOperator(null);
  };

  return (
    <Paper style={{ padding: "20px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField fullWidth value={input} variant="outlined" />
        </Grid>
        {["1", "2", "3", "+"].map((value, index) => (
          <Grid item xs={3} key={index}>
            <Button
              fullWidth
              variant="contained"
              onClick={() =>
                isNaN(+value)
                  ? handleOperatorClick(value)
                  : handleNumberClick(+value)
              }
            >
              {value}
            </Button>
          </Grid>
        ))}
        {["4", "5", "6", "-"].map((value, index) => (
          <Grid item xs={3} key={index}>
            <Button
              fullWidth
              variant="contained"
              onClick={() =>
                isNaN(+value)
                  ? handleOperatorClick(value)
                  : handleNumberClick(+value)
              }
            >
              {value}
            </Button>
          </Grid>
        ))}
        {["7", "8", "9", "*"].map((value, index) => (
          <Grid item xs={3} key={index}>
            <Button
              fullWidth
              variant="contained"
              onClick={() =>
                isNaN(+value)
                  ? handleOperatorClick(value)
                  : handleNumberClick(+value)
              }
            >
              {value}
            </Button>
          </Grid>
        ))}
        {["0", "C", "=", "/"].map((value, index) => (
          <Grid item xs={3} key={index}>
            <Button
              fullWidth
              variant="contained"
              onClick={() =>
                value === "C"
                  ? handleClearClick()
                  : value === "="
                  ? handleEqualClick()
                  : isNaN(+value)
                  ? handleOperatorClick(value)
                  : handleNumberClick(+value)
              }
            >
              {value}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Calculator;
