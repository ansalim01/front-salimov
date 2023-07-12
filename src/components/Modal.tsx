import React from "react";
import { TPost } from "../types/TPost";
import "./modal.css";
interface PropsModal {
  setToggleModal: (i: TPost | null) => void;
  toggleModal: TPost | null;
}
function Modal({ setToggleModal, toggleModal }: PropsModal) {
  return (
    <div
      id="openModal"
      className={toggleModal?.text ? "modal active" : "modal"}
      onClick={() => setToggleModal(null)}
    >
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">{toggleModal?.title}</h3>
            <a
              href="#close"
              title="Close"
              className="close"
              onClick={() => setToggleModal(null)}
            >
              ×
            </a>
          </div>
          <div className="modal-body">
            <p>{toggleModal?.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
