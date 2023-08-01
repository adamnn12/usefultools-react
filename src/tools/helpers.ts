import { LengthUnit, TemperatureUnit, VolumeUnit } from "../components/types";

export const conversionFunctions: {
  length: (value: number, from: LengthUnit, to: LengthUnit) => number;
  temperature: (
    value: number,
    from: TemperatureUnit,
    to: TemperatureUnit
  ) => number;
  volume: (value: number, from: VolumeUnit, to: VolumeUnit) => number;
} = {
  length: (value: number, from: LengthUnit, to: LengthUnit) => {
    const conversionRates: Record<LengthUnit, number> = {
        meter: 1,
        kilometer: 0.001,
        centimeter: 100,
        feet: 3.28084,
        inch: 39.3701,
        mile: 0.000621371,
        yard: 1.09361,
        lightyear: 1.057e-16,
      };
    return (value / conversionRates[from]) * conversionRates[to];
  },
  temperature: (value: number, from: TemperatureUnit, to: TemperatureUnit) => {
    if (from === "celsius" && to === "fahrenheit") {
      return value * (9 / 5) + 32;
    } else if (from === "fahrenheit" && to === "celsius") {
      return (value - 32) * (5 / 9);
    }
    return value;
  },
  volume: (value: number, from: VolumeUnit, to: VolumeUnit) => {
    const conversionRates: Record<VolumeUnit, number> = {
      liter: 1,
      gallon: 0.264172
    };
    return (value / conversionRates[from]) * conversionRates[to];
  }
};
