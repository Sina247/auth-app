"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();

	useEffect(() => {
		router.push("/auth");
	}, [router]);

	return <p>Redirecting to the login page...</p>;
}
