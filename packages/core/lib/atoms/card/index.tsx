import React from "react";
import BSCard from "react-bootstrap/Card";

export const Card: React.FC = ({ children }) => {
  return (
    <BSCard>
      <BSCard.Body>ssds{children}</BSCard.Body>
    </BSCard>
  );
};

export default Card;
