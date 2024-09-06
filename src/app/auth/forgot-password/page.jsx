"use client";

import { Field, Form, Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";

const ForgotPasswordPage = () => {
	const [error, setError] = useState(null);
	const validationSchema = yup.object().shape({
		email: yup.string().email("please insert your email"),
	});

	const handleSubmit = async (values) => {
		const res = await fetch("/api/auth/forgot-password", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email: values.email }),
		});

		const result = await res.json();
		if (result.status !== 200) {
			setError(result.message);
		}
		console.log({ result });
	};

	console.log({ error });
	return (
		<main className="w-full h-screen bg-black mx-auto pt-16">
			<Formik
				initialValues={{ email: "" }}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting }) => {
					handleSubmit(values).finally(() => setSubmitting(false));
				}}
			>
				{({ isSubmitting }) => (
					<Form className="px-6 py-4 border border-gray-200 rounded-md w-80 mx-auto text-center">
						<h1 className="text-lg pb-4 text-white">
							Enter your email to change your password
						</h1>
						{error && (
							<div className="text-sm py-3 text-red-500 font-medium">
								{error}
							</div>
						)}

						<Field
							type="email"
							placeholder="Enter your email"
							name="email"
							className="w-full px-2 py-1 rounded-sm focus:outline-none mb-2 text-black"
						/>

						<button
							type="submit"
							disabled={isSubmitting}
							className="px-3 py-1 bg-blue-500 text-white rounded-md"
						>
							{isSubmitting ? "Loading..." : "Submit"}
						</button>
					</Form>
				)}
			</Formik>
		</main>
	);
};

export default ForgotPasswordPage;
