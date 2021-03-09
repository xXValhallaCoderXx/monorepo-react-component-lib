import React from "react";
export interface IProps {
  label: string;
}

export const Button: React.FC<IProps> = ({ label }) => <button>{label}</button>;
export default Button;
