import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../features/modal/ModalSlice";

const Modal = () => {
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>買い物かごを空にしますか？</h4>
        <div className="btn-container">
          <button className="btn confirm-btn">OK</button>
          <button className="btn clear-btn">やめとく</button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
