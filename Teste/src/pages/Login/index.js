import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import "./styles.css";

import logoImg from "../../img/logologin.png";
import useUser from "../../Store/useUser";

function initialState() {
  return { user: "", password: "" };
}
export default function Login() {
  const { setUser } = useUser();
  const [values, setValues] = useState(initialState);
  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  return (
    <section className="Fundologin">
      <div className="login-container">
        <img className="imagem" src={logoImg} alt="Logo" />

        <div className="content">
          <section className="form">
            <form>
              <h1>Faça seu login</h1>
              <input
                name="user"
                onChange={onChange}
                value={values.user}
                placeholder="Digite o seu Usuário"
              />
              <input
                type="password"
                name="password"
                onChange={onChange}
                value={values.password}
                placeholder="Insira a senha de 5 digitos"
                maxLength="5"
                required
              />
              <Link
                onClick={() => setUser(values)}
                className="button"
                to="/profile"
              >
                Entrar
              </Link>
              <Link className="volta-Link" to="/register">
                <FiLogIn size={16} color="#E02041" />
                Lembrar senha
              </Link>
            </form>
          </section>
        </div>
      </div>
    </section>
  );
}
