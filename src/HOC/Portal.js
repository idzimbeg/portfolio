import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import ContactForm from "../components/ContactForm/ContactForm";

const Portal = ({ show, onClose }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? <ContactForm onClose={handleCloseClick} /> : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("portal")
    );
  } else {
    return null;
  }
};

export default Portal;
