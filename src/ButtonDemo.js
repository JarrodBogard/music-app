import { useState } from "react";
import Button from "@mui/material/Button";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const handleClick = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className={`app ${theme}`}>
      <Button variant="contained" onClick={handleClick}>
        Click Me
      </Button>
      <Button variant="text">Text</Button>
      <Button color="error" variant="contained">
        Contained
      </Button>
      <Button size="small" variant="outlined">
        Outlined
      </Button>
    </div>
  );
}

export default App;
