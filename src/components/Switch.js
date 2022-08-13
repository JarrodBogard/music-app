import * as React from "react";
import Switch from "@mui/material/Switch";

export default function BasicSwitches(props) {
  const handleOnline = (e) => {
    console.log(e);
    props.setState(!props.state);
  };

  return (
    <div>
      <Switch
        color="success"
        onChange={() => props.setState(!props.state)}
        checked={props.state}
      />
    </div>
  );
}
