import React, { useState } from "react";

// we will use built-in react hook for adding state to our components
// and we import it like this {useState}

export default function TextForm(props) {
    // this function converts entered text into uppercase by using inbuilt js function 'toUpperCase' to text variable so we can access text vraibale from anywhere in this function and returned value is stored in 'newText' variable then we update value of 'text' field by changing value in setText as newText
    const handleUppercase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    };

    const handleLowercase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard", "success");
    };

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    };

    const handleClearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Cleared", "success");
    };

    // oncChange event is necessary so that we can listen change in where the onChange function is called so in this case it is called in textarea so whenever text changes we listen it by onChange function and sets the changed text in setText variable which basically updates the value of text variable reflecting in textarea
    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    // below is syntax for defining state and defined for my text field
    const [text, setText] = useState("");
    // text = "new text"; wrong way to change state
    // setText("new text"); Correct way to change state

    return (
        <>
            <div className="container" style={{ color: props.mode === "dark" ? "white" : "#242424" }}>
                <h2 className="mb-3">{props.heading}</h2>

                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="mybox"
                        value={text}
                        style={{
                            backgroundColor: props.mode === "dark" ? "#242424" : "white",
                            color: props.mode === "dark" ? "white" : "#242424",
                        }}
                        onChange={handleOnChange}
                        rows="7"
                    ></textarea>
                </div>

                <button disabled={text.length === 0} className="btn btn-outline-primary" onClick={handleUppercase}>
                    Convert to Uppercase
                </button>
                <button disabled={text.length === 0} className="btn btn-outline-danger mx-3" onClick={handleLowercase}>
                    Convert to Lowercase
                </button>
                <button disabled={text.length === 0} className="btn btn-outline-warning mx-3" onClick={handleCopy}>
                    Copy
                </button>
                <button disabled={text.length === 0} className="btn btn-outline-info mx-3" onClick={handleExtraSpace}>
                    Remove Extra Spaces
                </button>
                <button disabled={text.length === 0} className="btn btn-outline-success mx-3" onClick={handleClearText}>
                    Clear text
                </button>
            </div>

            <div className="container my-4" style={{ color: props.mode === "dark" ? "white" : "#242424" }}>
                <h2>Your text summary</h2>
                <p>
                    {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters
                </p>
                <p>{0.008 * (text.trim() === "" ? 0 : text.trim().split(/\s+/).length)} minutes to read</p>
            </div>
        </>
    );
}
