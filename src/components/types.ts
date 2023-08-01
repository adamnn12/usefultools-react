export type Tools = "calculator" | "converter" | "colorpicker";

export type MeasurementType = "length" | "volume" | "temperature";
export type LengthUnit =
  | "meter"
  | "kilometer"
  | "centimeter"
  | "feet"
  | "inch"
  | "mile"
  | "yard"
  | "lightyear";
export type VolumeUnit = "liter" | "gallon";
export type TemperatureUnit = "celsius" | "fahrenheit";
export type Unit = LengthUnit | VolumeUnit | TemperatureUnit;
