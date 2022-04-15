import React from "react";
import "./styles.css";

const Modal = ({ id = "modal", onClose = () => {}, children, teste }) => {
  const handleOutSideClick = (e) => {
    if (e.target.id === id) onClose();
  };
  return (
    <div id={id} className="modal" onClick={onClose}>
      <div className="container">
        <button className="close" onClick={onClose}>
          FECHAR
        </button>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
