import React from "react";
import '../assets/styles/components/InputText.scss';

const InputText = ({label,name, id, type, onChange, defaultValue = ""}) => {
    // const updated = (e) => {
    //     console.log(e.target.value)
    //     setForm({...form,[e.target.name] : e.target.value})
    // }
    return (
        <div className="input">
            <input name={name} type={type} id={id}  onChange={onChange} defaultValue={defaultValue} className="input__text" placeholder="a" autoComplete="off" />
            <label htmlFor={label} className="input__label" >{label}</label>
            <small className="input__error "></small>
        </div>
    );
}

export default InputText;