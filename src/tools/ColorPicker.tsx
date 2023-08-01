import React, { useState } from "react";
import { SketchPicker } from "react-color";

interface ColorPickerProps {
  onColorChange?: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ onColorChange }) => {
  const [color, setColor] = useState("fff");
  const handleChange = (color: any) => {
    setColor(color);
    if (onColorChange) {
      onColorChange(color.hex);
    }
  };

  return (
    <div>
      <SketchPicker onChange={handleChange} color={color} />
    </div>
  );
};

export default ColorPicker;
