import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiPower, FiUser, FiAlertTriangle } from "react-icons/fi";
import { useState } from "react";
import styles from "./styles.css";
import useUser from "../../Store/useUser";
import ButtonOptions from "../../components/ButtonOptions/Index";
import Logo from "../../img/testee.png";
import Logofooter from "../../img/teste.png";
import Animação from "../../img/fundo.mp4";

export default function Register() {
  const { user } = useUser();
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  useEffect(() => {
    if (user.user == "") {
      navigate("/");
    }
  }, []);
  return (
    <section className="fundo">
      <section className="header">
        <div className="sair">
          <FiUser className="sair" size={25} color="white" />

          <img src={Logo} alt="img" />
          <Link className="sair" to="/">
            <FiPower size={25} color="white" />
          </Link>
        </div>
      </section>

      <video className="video" autoPlay loop muted>
        <source src={Animação} type="video/mp4" />
      </video>

      <p className="h1">
        Olá, <b>{user.user}</b>!
      </p>

      <div className="Container">
        <div className="row">
          <ButtonOptions title="Obras">
            <div>
              <table className="tabela">
                <tr>
                  <th>BAIRRO</th>
                  <th>ENCARREGADO</th>
                  <th>DATA DE INÍCIO</th>
                  <th>PREVISÃO DE TÉRMINO</th>
                </tr>
                <tr>
                  <td>Jardim Aeroporto</td>
                  <td>Tadeu</td>
                  <td>25/03/2022</td>
                  <td>25/10/2022</td>
                </tr>

                <tr>
                  <td>Centro</td>
                  <td>Paulo</td>
                  <td>22/01/2021</td>
                  <td>25/04/2022</td>
                </tr>

                <tr>
                  <td>Pinheirinho</td>
                  <td>Joel</td>
                  <td>22/02/2020</td>
                  <td>25/01/2022</td>
                </tr>
                <tr>
                  <td>Pinheirinho</td>
                  <td>Bruno</td>
                  <td>21/02/2020</td>
                  <td>25/11/2023</td>
                </tr>
                <tr>
                  <td>Jardim Alvorada</td>
                  <td>Sander</td>
                  <td>22/02/2022</td>
                  <td>25/10/2022</td>
                </tr>
              </table>
              <button className="cadastrar" type="submit">
                CADASTRAR
              </button>
            </div>
          </ButtonOptions>

          <ButtonOptions title="Engenheiros">
            <div>
              <table className="tabela">
                <tr>
                  <th>NOME</th>
                  <th>CARGO</th>
                  <th>FACULDADE:</th>
                </tr>
                <tr>
                  <td>Andre</td>
                  <td>Efetivo</td>
                  <td>Unifal</td>
                </tr>
                <tr>
                  <td>Paula</td>
                  <td>Efetivo</td>
                  <td>Unifenas</td>
                </tr>
                <tr>
                  <td>Mariza</td>
                  <td>Estagiário</td>
                  <td>Unifal</td>
                </tr>
                <tr>
                  <td>Talles</td>
                  <td>Estagiário</td>
                  <td>Unifenas</td>
                </tr>
              </table>
              <button className="cadastrar" type="submit">
                CADASTRAR
              </button>
            </div>
          </ButtonOptions>
        </div>
        <div className="row">
          <ButtonOptions title="Pedreiros">
            <div>
              <table className="tabela">
                <tr>
                  <th>NOME</th>
                  <th>EXPERIÊNCIA</th>
                  <th>SALÁRIO</th>
                </tr>
                <tr>
                  <td>Arthur</td>
                  <td>SIM</td>
                  <td>R$ 1.500,00</td>
                </tr>
                <tr>
                  <td>Leonardo</td>
                  <td>SIM</td>
                  <td>R$ 1.500,00</td>
                </tr>
                <tr>
                  <td>Caio</td>
                  <td>SIM</td>
                  <td>1.500,00</td>
                </tr>
                <tr>
                  <td>Rodrigo</td>
                  <td>SIM</td>
                  <td>1.500,00</td>
                </tr>
                <tr>
                  <td>Gustavo</td>
                  <td>SIM</td>
                  <td>1.500,00</td>
                </tr>
                <tr>
                  <td>Marcos</td>
                  <td>SIM</td>
                  <td>1.500,00</td>
                </tr>
              </table>
              <button className="cadastrar" type="submit">
                CADASTRAR
              </button>
            </div>
          </ButtonOptions>
          <ButtonOptions title="Estoque">
            <div>
              <div className="alerta">
                <FiAlertTriangle size={130} color="yellow" />
                <br></br>
                <h1>INDISPONIVEL</h1>
              </div>
              <br></br>
              <button className="cadastrar" type="submit">
                CADASTRAR
              </button>
            </div>
          </ButtonOptions>
        </div>
      </div>
    </section>
  );
}
