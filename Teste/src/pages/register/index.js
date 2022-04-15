import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <div className="form">
            <h1>
              Recuperação de Senha<b></b>:
            </h1>
            <p>
              Informe seu Email e Cpf para recuperação da senha. Logo após
              verifique a caixa de entrada do seu email.{" "}
            </p>
            <Link className="volta-link" to="/">
              <FiArrowLeft size={16} color="#E02041" />
              Voltar a página de login
            </Link>
          </div>
        </section>

        <form>
          <input type="email" placeholder="Insira seu Email" />
          <input
            type="text"
            className="form-control cpf-mask"
            maxLength={11}
            placeholder="Ex.: 000.000.000-00"
          />
          <button className="button" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
