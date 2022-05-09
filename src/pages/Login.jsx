import React from "react";
import '../assets/styles/pages/login.scss';
import InputText from "../components/InputText";
import MSButton from "../components/MSButton";
const Login = () => {
    const [form, setForm] = React.useState({});
    return (
        <div className="login">
            <div className="form">
                <section className="form__header">
                    <h5>Iniciar sesión</h5>
                </section>
                <section className="form__content">
                    <InputText label="usuario" name="usuario" type="text"  form={form} setForm={setForm} autoFocus="true"/>
                    <InputText label="contraseña" type="password" name="password" form={form} setForm={setForm}/>
                </section>
                <section className="form__footer">
                    <MSButton type="button" className="btn__save" value="iniciar"/>
                </section>
            </div>
        </div>
    )
};

export default Login;

