import { useState, useEffect } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Button from "@mui/material/Button";
import Cards from "./components/Cards";
import Switch from "./components/Switch";
import Slider from "./components/Slider";
import Select from "./components/Select";

import "./App.css";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [value, setValue] = useState(30);
  const [quality, setQuality] = useState(2);

  useEffect(() => {
    console.log(isToggled, value);
  }, [isToggled, value]);

  return (
    <main>
      <Header title="My Music App" />
      <div className="app">
        {!isLogged ? (
          <form className="form">
            <Input label="Username" />
            <Input label="password" type="password" />
            <Button
              className="button"
              sx={{ mt: "8px" }}
              variant="contained"
              onClick={() => setIsLogged(true)}
            >
              Login
            </Button>
          </form>
        ) : (
          <div className="dashboard-container">
            <h1 style={{ color: "grey" }}>Welcome User!</h1>
            <div className="card-container">
              <Cards
                state={isToggled}
                setState={setIsToggled}
                title="Online Mode"
                body="Is this application connected to the internet?"
                component={Switch}
              />
              <Cards
                className
                state={value}
                setState={setValue}
                title="Master Volume"
                body="Overrides all other sound setting in this application"
                component={Slider}
              />
              <Cards
                state={quality}
                setState={setQuality}
                title="Master Volume"
                body="Overrides all other sound setting in this application"
                component={Select}
              />
            </div>
            <div className="system-notifications-container">
              <h3>System Notifications:</h3>
              {isToggled && (
                <p>
                  Your application is offline. You won't be able to share or
                  stream music to other devices.
                </p>
              )}
              {value >= 80 && (
                <p>
                  Listening to music at a high volume could cause long-term
                  hearing loss.
                </p>
              )}
              {quality < 2 && (
                <p>
                  Music quality is degraded. Increase quality if your connection
                  allows it.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
