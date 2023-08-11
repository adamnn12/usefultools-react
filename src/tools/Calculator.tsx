import React, { useState } from "react";
import { Button, TextField, Grid, Box } from "@mui/material";
import * as math from "mathjs";

const Calculator: React.FC = () => {
  const [input, setInput] = useState("");

  const handleTypedInput = (event: any) => {
    const newExpression = event.target.value;
    try {
      math.parse(newExpression);
      setInput(newExpression);
    } catch (e) {
    }
  };

  const handleNumberClick = (number: number) => {
    setInput(input + number.toString());
  };

  const handleOperatorClick = (op: string) => {
    setInput(input + op);
  };

  const handleEqualClick = () => {
    const result = math.evaluate(input);
    setInput(result);
  };

  const handleClearClick = () => {
    setInput("");
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Grid container spacing={1} xs={8} py={3} px={1}>
        <TextField
          fullWidth
          variant="outlined"
          value={input}
          onChange={handleTypedInput}
        />
      </Grid>
      <Grid container spacing={1} xs={8}>
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
    </Box>
  );
};

export default Calculator;
