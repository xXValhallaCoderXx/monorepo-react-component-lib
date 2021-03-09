import "../../styles/index.scss";
//@ts-ignore
import styles from "./index.module.scss";
import React from "react";

export interface IButtonProps {
  label: string;
}

export const Button: React.FC<IButtonProps> = ({ label }) => (
  <button className={`btn-demo ${styles.testClass}`}>{label}</button>
);
export default Button;
