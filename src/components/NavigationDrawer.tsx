import React from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider
} from "@mui/material";

type NavigationDrawerProps = {
  open: boolean;
  onClose: () => void;
};

function NavigationDrawer(props: NavigationDrawerProps) {
  const { open, onClose } = props;
  const toolNameToRoute = (tool: string) => {
    return tool.toLowerCase().replaceAll(" ", "");
  };
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List>
        {[
          "Calculator",
          "Unit Converter",
          "Color Picker",
          "File Converter",
          "Currency Exchanger",
          "Time Calculator",
          "Interest Rate Calculator"
        ].map((toolName) => {
          return (
            <div>
              <ListItem
                button
                component={Link}
                to={`/${toolNameToRoute(toolName)}`}
                onClick={onClose}
              >
                <ListItemText primary={`${toolName}`} />
              </ListItem>
              <Divider />
            </div>
          );
        })}
      </List>
    </Drawer>
  );
}

export default NavigationDrawer;
