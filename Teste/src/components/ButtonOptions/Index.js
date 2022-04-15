import React from "react";

import { useState } from "react";
import styles from "./styles.css";
import Modal from "../modal/Modal";
import Register from "../../pages/profile";

export default function ButtonOptions({ children, title, teste }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <div className="Register">
        <button
          className="buttonOptions"
          onClick={() => setIsModalVisible(true)}
        >
          {title}
        </button>
      </div>

      {isModalVisible ? (
        <Modal onClose={() => setIsModalVisible(false)}>{children}</Modal>
      ) : null}
    </>
  );
}
