import React from "react";

import TextField from "@material-ui/core/TextField";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1ADCAD",
    },
    secondary: {
      main: "#1ADCAD",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#FFFFFF",
    },
  },
});

function RegisterCard() {
  return (
    <div className="register-container">
      <h1>Not a User? Sign up now!</h1>
      <div className="form">
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Full Name" />
        <ThemeProvider theme={theme}>
          <TextField
            id="date"
            label="Birthday"
            type="date"
            defaultValue="2021-04-01"
            className="birthday"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </ThemeProvider>
      </div>
    </div>
  );
}

export default RegisterCard;
