import React from "react";
import '../assets/styles/components/MSButton.scss';

const MSButton = (props) => {
    return (
        <button {...props}>{props.value}</button>
    );
}
export default MSButton;