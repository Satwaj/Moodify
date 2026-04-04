import React from "react";

const SectionCard = ({ title, className = "", children }) => {
  return (
    <section className={`home-card ${className}`.trim()}>
      <h3>{title}</h3>
      {children}
    </section>
  );
};

export default SectionCard;
