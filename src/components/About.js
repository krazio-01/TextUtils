import React from "react";

export default function About(props) {
    // we will create conditional variable for myStyle
    let myStyle = {
        color: props.mode === "dark" ? "white" : "#242424",
        backgroundColor: props.mode === "dark" ? "#242424" : "white",
    };

    return (
        <div className="container my-5" style={myStyle}>
            <div style={myStyle}>
                <p>- Analyse your text</p>
                <p>
                    Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character
                    count
                </p>
            </div>

            <div style={myStyle}>
                <p>- Free to use</p>
                <p>
                    TextUtils is a free character counter tool that provides instant character count & word count
                    statistics for a given text. TextUtils reports the number of words and characters. Thus it is
                    suitable for writing text with word/ character limit.
                </p>
            </div>
        </div>
    );
}
