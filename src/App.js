import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import Error from "./components/Error";
// importing react route
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";

// Function based component
function App() {
    // we will create state for darkMode here in app.js so that we have control of our whole appa dn it will be optimised
    const [mode, setMode] = useState("light");
    // we will create state for alert also
    const [alert, setAlert] = useState(null);

    // here is method for seeting the alert message and it's type
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type,
        });

        setTimeout(() => {
            setAlert(null);
        }, 1500);
    };

    // function to toggle dark or light mode
    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "#242424";
            showAlert("Dark mode is active", "success");
        } else {
            setMode("light");
            document.body.style.backgroundColor = "white";
            showAlert("Light mode is active", "success");
        }
    };

    return (
        // this whole is JSX
        // JSX is basically html but what it differes in is:
        //  className -> classname
        // for -> htmlFor
        //  tabindex -> tabIndex
        <>
            {/* routing through this and redirecting to pages */}
            <Main>
                <Navbar title="textUtils" aboutText="About us" mode={mode} toggleMode={toggleMode} />
                <Alert alert={alert} />

                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <TextForm
                                heading="Try TextUtils - word counter, character counter, remove extra spaces"
                                mode={mode}
                                showAlert={showAlert}
                            />
                        }
                    />
                    <Route exact path="/about" element={<About mode={mode} />} />
                    <Route exact path="/*" element={<Error />} />
                </Routes>
            </Main>
        </>
    );
}

export default App;
