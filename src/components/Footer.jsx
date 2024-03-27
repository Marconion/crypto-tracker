import React from "react";

const year = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer>
      <div className="divider"></div>
      <p>Copyright © Marko Žujović - {year}</p>
    </footer>
  );
};
