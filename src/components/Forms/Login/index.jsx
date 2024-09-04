"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as yup from "yup";
import { signIn } from "next-auth/react";

const validationSchema = yup.object().shape({
	username: yup.string().required("this field is required"),
	password: yup.string().required("this field is required"),
});

const LoginForm = () => {
	const router = useRouter();
	const [error, setError] = useState(null);

	const handleLogin = async ({ username, password }) => {
		try {
			const res = await signIn("credentials", {
				redirect: false,
				username,
				password,
				callbackUrl: "/",
			});

			if (!res?.error) {
				router.push("/");
			} else {
				setError(res.error);
			}
		} catch (error) {
			setError("An unexpected error occured, please try again later");
		}
	};

	return (
		<Formik
			initialValues={{ username: "", password: "" }}
			validationSchema={validationSchema}
			onSubmit={(values, { setSubmitting }) => {
				handleLogin(values).finally(() => setSubmitting(false));
			}}
		>
			{({ isSubmitting }) => (
				<Form>
					{error && <div className="text-sm text-red-500 py-3">{error}</div>}
					<div className="pb-2">
						<Field
							type="text"
							placeholder="Username"
							name="username"
							className="w-full px-2 py-1 rounded-sm focus:outline-none mb-2 text-black"
						/>
						<ErrorMessage
							name="username"
							component="div"
							className="text-xs text-red-500 text-left"
						/>
					</div>
					<div className="pb-2">
						<Field
							type="password"
							placeholder="Password"
							name="password"
							className="w-full px-2 py-1 rounded-sm focus:outline-none mb-2 text-black"
						/>
						<ErrorMessage
							name="password"
							component="div"
							className="text-xs text-red-500 text-left"
						/>
					</div>
					<button
						type="submit"
						className="w-full py-1 bg-blue-500 text-white rounded-sm"
						disabled={isSubmitting}
					>
						{isSubmitting ? "Loading..." : "Sign In"}
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default LoginForm;
