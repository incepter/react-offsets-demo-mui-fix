import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import NewTextField from "./NewTextField";
import "./styles.css";

function App() {
  const [value, setValue] = React.useState("Initial value");
  const [visible, setVisible] = React.useState(false);
  function onChange({ target: { value: newValue } }) {
    setValue(newValue);
  }
  function toggle() {
    setVisible(old => !old);
  }
  return (
    <div className="App">
      <Button onClick={toggle}>{visible ? "hide" : "show"}</Button>
      <div style={{ display: visible ? "block" : "none" }}>
        <TextField
          variant="outlined"
          value={value}
          label="Input label with issue"
          onChange={onChange}
        />
        <NewTextField
          style={{ marginTop: 16 }}
          variant="outlined"
          value={value}
          label="Input label with no issues"
          onChange={onChange}
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
