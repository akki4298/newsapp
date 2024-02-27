import { Component } from "react";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here");
  const onupcase = () => {
    console.log("button is clickewed" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.alert("to uppercase converted", "Success");
  };

  const upischanged = (e) => {
    console.log("chage is working");
    setText(e.target.value);
  };
  let toclear = () => {
    setText("");
  };

  return (
    <>
      <div className="container">
        <form>
          <div
            className="form-group"
            style={{ color: props.mode === "dark" ? "white" : "black" }}
          >
            <label htmlFor="textbox">{props.header}</label>
            <textarea
              style={{
                backgroundColor: props.mode === "light" ? "dark" : "light",
                color: props.mode === "dark" ? "grey" : "black",
              }}
              onChange={upischanged}
              className="form-control"
              value={text}
              id="textbox"
              rows="8"
            ></textarea>
          </div>
          <button
            type="button"
            onClick={onupcase}
            className="btn btn-primary mx-2"
          >
            ToUppercase
          </button>
          <button
            type="button"
            onClick={toclear}
            className="btn btn-primary mx-2"
          >
            Clear
          </button>
        </form>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {" "}
          {text.split(" ").length}words and {text.length} chracters
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "enter something to preview"}</p>
      </div>
    </>
  );
}
