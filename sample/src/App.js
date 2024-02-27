import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import { useState } from "react";
import Alert from "./Components/Alert";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";

function App() {
  let [mode, setMode] = useState("light");
  let [alert, setAlert] = useState(null);

  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  let toggleMode = () => {
    console.log("toggleis work");
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("this is white massge", "success");
      document.title = "Dark mode enabled";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("this is black massge", "danger");
    }
  };
  let otherMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "primary";
      showAlert("this is white massge", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#e3f2fd";
      showAlert("this is black massge", "danger");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          abouttext="aboutText"
          mode={mode}
          togglemode={toggleMode}
          otherMode={otherMode}
        />
        <Alert alert={alert} />
        <div>
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={
                <TextForm header="Enter text" mode={mode} alert={showAlert} />
              }
            />
          </Routes>
        </div>

        {/* <TextForm header="Enter text" mode={mode} alert={showAlert} /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
