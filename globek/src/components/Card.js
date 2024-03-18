import React, { useEffect, useState, useRef } from "react";
import "../style/Card.css";
import phone from "../icons/phone.svg";
import email from "../icons/email.svg";
import ModalCard from "./ModalCard";

const Card = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [show, setShow] = useState(false);
  const modalRef = useRef(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setShow(true);
  };

  const handleModalClose = () => {
    setSelectedItem(null);
    setShow(false);
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleModalClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div>
      {!show && (
        <div className="displayCard">
          {items &&
            items.map((item, index) => (
              <div
                className="containerCard"
                key={index}
                onClick={() => handleCardClick(item)}
              >
                <div className="containerContent">
                  <div>
                    <div className="nameCard">
                      <strong>{item.name}</strong>
                    </div>
                    <div className="containerPhoneMail">
                      <div className="PhoneMail">
                        <img src={phone} alt="Phone icon" />
                        <div className="phone">{item.phone}</div>
                      </div>
                      <div className="PhoneMail">
                        <img src={email} alt="Email icon" />
                        <div className="phone">{item.email}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}

      {show && (
        <div ref={modalRef}>
          <ModalCard item={selectedItem} onClose={handleModalClose} />
        </div>
      )}
    </div>
  );
};

export default Card;
