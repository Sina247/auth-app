import React from "react";
import styles from "./button.module.scss";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: Props) => {
	return (
		<button className={styles.button} {...props}>
			{children}
		</button>
	);
};

export default Button;
