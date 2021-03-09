import "../../styles/index.scss";
import BootstrapButton from "react-bootstrap/Button";

import React from "react";

export interface IButtonProps {
  label: string;
}

export const Button: React.FC<IButtonProps> = ({ label }) => (
  <BootstrapButton>{label}</BootstrapButton>
);
export default Button;
