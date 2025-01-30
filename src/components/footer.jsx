import React from "react";

export const Footer = () => {
  return (
    <div>
      <footer>
        <div className="row bg-dark d-flex align-self-center">
          <p
            className="text-center"
            style={{ color: "white", margin: "20px", fontSize: "14px" }}
          >
            ©2025 - NewsMag - Made with{" "}
            <i className="bi bi-heart" style={{ color: "#DC3E45" }}></i> by
            Webilys - Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
