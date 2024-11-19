import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    {/* we using link instead of anchor tag 'a' to use react router */}
                    <Link className="navbar-brand" to="/">
                        {props.title}
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="/navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to={"/"}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/about"}>
                                    {" "}
                                    {props.aboutText}{" "}
                                </Link>
                            </li>
                        </ul>

                        <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                            <input
                                className="form-check-input"
                                style={{ cursor: "pointer" }}
                                onClick={props.toggleMode}
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckDefault"
                            />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                                {props.mode === "light" ? "Enable Dark Mode" : "Enable Light Mode"}
                            </label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

// we can do typechecking with proptypes by passing specific proptype
// we can make pasing prop strict by setting it as 'isRequired' by this programmer cannot leave that prop field empty
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string,
};

// if we forgot to pass props then react will use default proptype as below
Navbar.defaultProps = {
    title: "TextUtils",
    aboutText: "About",
};
