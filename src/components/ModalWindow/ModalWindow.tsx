import React from "react";
import Modal from "react-modal";

type ModalWindowProps = {
  children: React.ReactNode;
  visible: boolean;
};

const ModalWindow = ({ children, visible}: ModalWindowProps) => {
  
 

  return (
    <Modal isOpen={visible}  style={{
      overlay: {
        padding: "20px",
        background: "rgba(0, 0, 0, 0.5)",
        position: "fixed",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "999",
      },
      content: {
        position: "static",
        padding: "0px",
        height: "auto",
        margin: "auto",
        display: "flex",
        maxWidth: "420px",
        width:'100%',
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "10px",
        border: "1px solid #d1d5db",
        background: "#fff",
      },
    }}>
      {children}
    </Modal>
  );
};

export default ModalWindow;
