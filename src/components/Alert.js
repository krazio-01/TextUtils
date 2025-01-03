import React from "react";

export default function Alert(props) {
    // we want to capitalise 's' of 'success' word but as success is a type so we cannot just pass 'Success' instead of 'success' for that we create a function for it
    const capitalise = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    };

    return (
        <div style={{ height: "60px" }}>
            {props.alert && (
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{capitalise(props.alert.type)}</strong> : {props.alert.msg}
                </div>
            )}
        </div>
    );
}
