import React from "react";
import "../style/ModalCard.css";
import close from "../icons/close.svg";

const ModalCard = ({ item, onClose }) => {
  return (
    <div className="modalContainer">
      <div className="modalFullContent">
        <div className="modalName">
          <div className="textName">
            <strong>{item.name}</strong>
          </div>
          <img src={close} onClick={onClose} />
        </div>
        <div className="modalContent">
          <div className="modalBlock">
            <div className="text">Телефон:</div>
            <div className="text2">+{item.phone}</div>
          </div>
          <div className="modalBlock">
            <div className="text">Почта:</div>
            <div className="text2">{item.email}</div>
          </div>
          <div className="modalBlock">
            <div className="text">Дата Приема:</div>
            <div className="text2">{item.hire_date}</div>
          </div>
          <div className="modalBlock">
            <div className="text">Должность:</div>
            <div className="text2">{item.position_name}</div>
          </div>
          <div className="modalBlock">
            <div className="text">Подразделение:</div>
            <div className="text2">{item.department}</div>
          </div>
        </div>
        <div className="DopInfo">
          <div className="text">Дополнительная информация:</div>
          <div>Тут неизвестная ифонрмация</div>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
