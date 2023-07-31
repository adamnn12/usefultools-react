import React from "react";
import { SketchPicker } from "react-color";

interface ColorPickerProps {
  onColorChange?: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ onColorChange }) => {
  const handleChange = (color: any) => {
    if (onColorChange) {
      onColorChange(color.hex);
    }
  };

  return (
    <div>
      <SketchPicker onChange={handleChange} />
    </div>
  );
};

export default ColorPicker;
