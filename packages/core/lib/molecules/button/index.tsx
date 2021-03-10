import BootstrapButton from "react-bootstrap/Button";

import React from "react";

export interface IButtonProps {
  label: string;
  size?: "sm" | "lg" | null;
  variant?: "primary" | "secondary" | "whire-primary";
}

const mapVariants = (variant) => {
  switch (variant) {
    case "primary":
      return "primary";
    case "secondary":
      return "outline-primary";
    default:
      return "primary";
  }
};

export const Button: React.FC<IButtonProps> = ({ label, size, variant }) => (
  <BootstrapButton variant={mapVariants(variant)} size={size}>
    {label.toUpperCase()}
  </BootstrapButton>
);

Button.defaultProps = {
  variant: "primary",
  size: null,
};
export default Button;
