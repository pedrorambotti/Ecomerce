import React from "react";

const Modal = ({ openModal, contenidoModal }) => {
  return (
    <article className="modal is-open">
      <div className="modal-container"></div>
      <h1>{contenidoModal.id}</h1>
      <p>Direccion de correo electronico: </p>
      <p>Numero de telefono:</p>
      <p>Pais:</p>
      <p>Ciudad:</p>
      <p>Calle : Piso:</p>
      <button>PAGAR</button>
    </article>
  );
};

export default Modal;
