import React from "react";
import styles from "./input.module.scss";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input = (props: Props) => {
	return <input className={styles.input} {...props} />;
};

export default Input;
