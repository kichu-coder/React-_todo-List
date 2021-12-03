import React from "react";
import Modal from "../UI/Modal";
import "./Popup.css";
const PopUp = (props) => {
  if (!props.triggered) return null;
  const popupResponse = (val) => {
    props.popupResponse(val);
  };
  return (
    <Modal>
      <div className="popup">
        <p>{props.text}</p>
        <div className="status">
          <button onClick={() => popupResponse("yes")}>Ok</button>
          <button onClick={() => popupResponse("no")}>Close</button>
        </div>
      </div>
    </Modal>
  );
};

export default PopUp;
