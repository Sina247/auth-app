"use client";

import { useRouter } from "next/navigation";
import styles from "./dashboard.module.scss";
import React, { useEffect, useState } from "react";

export default function DashboardPage() {
	const router = useRouter();
	const [userName, setUserName] = useState<string | null>(null);

	useEffect(() => {
		const storedUser = localStorage.getItem("user");

		if (!storedUser) {
			router.push("/auth");
			return;
		}

		const user = JSON.parse(storedUser);

		const fullName = user.name?.first && user.name?.last ? `${user.name.first} ${user.name.last}` : user.name || "User";
		setUserName(fullName);
	}, [router]);

	if (!userName) {
		return <p>Loading...</p>;
	}

	return (
		<main className={styles.container}>
			<h1>Welcome to the Dashboard</h1>

			<p>Hello, {userName}</p>
		</main>
	);
}
