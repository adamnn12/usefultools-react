import React, { useState } from "react";
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
import {
  LengthUnit,
  MeasurementType,
  TemperatureUnit,
  Unit,
  VolumeUnit
} from "../components/types";
import { conversionFunctions } from "./helpers";

const UnitConverter: React.FC = () => {
  const [value, setValue] = useState(0);
  const [measurementType, setMeasurementType] =
    useState<MeasurementType>("length");
  const [inputUnit, setInputUnit] = useState<Unit>("meter");
  const [outputUnit, setOutputUnit] = useState<Unit>("feet");
  const [convertedValue, setConvertedValue] = useState(0);

  const measurementTypes = [
    { label: "Length", value: "length" },
    { label: "Temperature", value: "temperature" },
    { label: "Volume", value: "volume" }
  ];

  const units = {
    length: [
        { label: 'Meter', value: 'meter' },
        { label: 'Kilometer', value: 'kilometer' },
        { label: 'Centimeter', value: 'centimeter' },
        { label: 'Feet', value: 'feet' },
        { label: 'Inch', value: 'inch' },
        { label: 'Mile', value: 'mile' },
        { label: 'Yard', value: 'yard' },
        { label: 'Lightyear', value: 'lightyear' },
      ],
    temperature: [
      { label: "Celsius", value: "celsius" },
      { label: "Fahrenheit", value: "fahrenheit" }
    ],
    volume: [
      { label: "Liter", value: "liter" },
      { label: "Gallon", value: "gallon" }
    ]
  };

  const handleConvert = () => {
    let newValue = 0;
    switch (measurementType) {
      case "length":
        newValue = conversionFunctions.length(
          value,
          inputUnit as LengthUnit,
          outputUnit as LengthUnit
        );
        break;
      case "temperature":
        newValue = conversionFunctions.temperature(
          value,
          inputUnit as TemperatureUnit,
          outputUnit as TemperatureUnit
        );
        break;
      case "volume":
        newValue = conversionFunctions.volume(
          value,
          inputUnit as VolumeUnit,
          outputUnit as VolumeUnit
        );
        break;
    }

    setConvertedValue(newValue);
  };

  return (
    <Paper style={{ padding: "20px" }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="measurement-type-label">Type</InputLabel>
            <Select
              labelId="measurement-type-label"
              label="Measurement Type"
              value={measurementType}
              onChange={(e) => {
                setMeasurementType(e.target.value as MeasurementType);
                setInputUnit(
                  units[e.target.value as MeasurementType][0].value as Unit
                );
                setOutputUnit(
                  units[e.target.value as MeasurementType][1].value as Unit
                );
              }}
            >
              {measurementTypes.map((type, index) => (
                <MenuItem value={type.value} key={index}>
                  {type.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            label="Value"
            variant="outlined"
            type="number"
            value={value}
            onChange={(e) => setValue(parseFloat(e.target.value))}
          />
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="input-unit-label">Input Unit</InputLabel>
            <Select
              labelId="input-unit-label"
              label="Input Unit"
              value={inputUnit}
              onChange={(e) => setInputUnit(e.target.value as Unit)}
            >
              {units[measurementType].map((unit, index) => (
                <MenuItem value={unit.value} key={index}>
                  {unit.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="output-unit-label">Output Unit</InputLabel>
            <Select
              labelId="output-unit-label"
              label="Output Unit"
              value={outputUnit}
              onChange={(e) => setOutputUnit(e.target.value as Unit)}
            >
              {units[measurementType].map((unit, index) => (
                <MenuItem value={unit.value} key={index}>
                  {unit.label}
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
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Converted Value"
            variant="outlined"
            value={convertedValue}
            InputProps={{ readOnly: true }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UnitConverter;
