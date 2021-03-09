import React from "react";

export interface IButtonProps {
  label: string;
}

export const Button: React.FC<IButtonProps> = ({ label }) => (
  <button className="btn-demo">{label}</button>
);
export default Button;
