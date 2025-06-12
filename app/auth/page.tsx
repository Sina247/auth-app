"use client";

import React, { useState } from "react";
import styles from "./auth.module.scss";
import { useRouter } from "next/navigation";
import Input from "../../app/components/Input";
import Button from "../../app/components/Button";

export default function AuthPage() {
	const router = useRouter();
	const [phone, setPhone] = useState("");
	const [error, setError] = useState("");

	const validatePhone = (value: string): string | null => {
		if (/\D/.test(value)) {
			return "Only digits are allowed";
		}
		if (value.length !== 11) {
			return "Phone number must be exactly 11 digits";
		}
		if (!value.startsWith("09")) {
			return "Phone number must start with 09";
		}
		return null;
	};

	const handleLogin = async () => {
		const validationError = validatePhone(phone);
		if (validationError) {
			setError(validationError);
			return;
		}
		setError("");

		try {
			const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
			const data = await res.json();
			const user = data.results[0];
			localStorage.setItem("user", JSON.stringify(user));
			router.push("/dashboard");
		} catch (err) {
			console.error("Login failed", err);
		}
	};

	return (
		<main className={styles.container}>
			<h1>Login to your account</h1>

			<div className={styles.formGroup}>
				<label htmlFor="phone">Phone Number</label>

				<Input type="text" id="phone" value={phone} placeholder="09191501293" onChange={(e) => setPhone(e.target.value)} />

				{error && <p className={styles.error}>{error}</p>}
			</div>
			
			<Button onClick={handleLogin}>Login</Button>
		</main>
	);
}
