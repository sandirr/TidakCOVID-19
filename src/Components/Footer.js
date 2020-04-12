import React from "react";

function Footer() {
  return (
    <div
      className="text-muted mx-auto py-3"
      style={{
        textAlign: "center",
        width: "100%",
      }}
    >
      &copy; 2020 TidakCOVID-19 | Oleh:{" "}
      <a
        href="https://github.com/sandirr"
        target="blank"
        style={{ textDecoration: "none" }}
      >
        Andi Irsandi
      </a>
    </div>
  );
}

export default Footer;
