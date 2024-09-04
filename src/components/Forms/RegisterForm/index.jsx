"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { useState } from "react";

const validationSchema = yup.object().shape({
	email: yup.string().email("Invalid email").required("This field is required"),
	fullname: yup.string(),
	username: yup
		.string()
		.min(5, "Minimum 5 character")
		.matches(/^\S*$/, "No space allowed")
		.required("This field is required"),
	password: yup
		.string()
		.min(8, "minimum 8 character")
		.required("This field is required"),
});

const RegisterForm = () => {
	const router = useRouter();
	const [error, setError] = useState(null);

	const handleRegister = async ({ email, fullname, username, password }) => {
		try {
			const response = await fetch("/api/auth/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, fullname, username, password }),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.message || "Registration failed");
			}

			console.log(data);

			if (data.status === 200) {
				router.push("/auth/login");
			}
		} catch (error) {
			setError(
				error.message || "An unexpected error occurred, please try again later"
			);
			console.log(error);
		}
	};

	return (
		<Formik
			initialValues={{
				email: "",
				fullname: "",
				username: "",
				password: "",
			}}
			validationSchema={validationSchema}
			onSubmit={(values, { setSubmitting }) => {
				handleRegister(values).finally(() => setSubmitting(false));
			}}
		>
			{({ isSubmitting }) => (
				<Form>
					{error && <div className="text-sm text-red-500">{error}</div>}
					<div className=" pb-2">
						<Field
							name="email"
							type="text"
							className="w-full px-2 py-1 rounded-sm focus:outline-none mb-2 text-black"
							placeholder="Email address"
						/>
						<ErrorMessage
							name="email"
							component="div"
							className="text-xs text-red-500 text-left"
						/>
					</div>
					<div className=" pb-2">
						<Field
							name="fullname"
							type="text"
							className="w-full px-2 py-1 rounded-sm focus:outline-none mb-2 text-black"
							placeholder="Fullname"
						/>
						<ErrorMessage
							name="fullname"
							component="div"
							className="text-xs text-red-500 text-left"
						/>
					</div>
					<div className=" pb-2">
						<Field
							name="username"
							type="text"
							className="w-full px-2 py-1 rounded-sm focus:outline-none mb-2 text-black"
							placeholder="Username"
						/>
						<ErrorMessage
							name="username"
							component="div"
							className="text-xs text-red-500 text-left"
						/>
					</div>
					<div className=" pb-2">
						<Field
							name="password"
							type="password"
							className="w-full px-2 py-1 rounded-sm focus:outline-none mb-2 text-black"
							placeholder="Password"
						/>
						<ErrorMessage
							name="password"
							component="div"
							className="text-xs text-red-500 text-left"
						/>
					</div>

					<p className="text-xs text-white">
						People who use our services may have uploaded your contact
						information to Instagram.
						<button className="font-medium text-blue-500">Learn More</button>
					</p>
					<p className="text-xs text-white py-2">
						By signing up you agree to our{" "}
						<button className="font-medium text-blue-500" type="button">
							Terms
						</button>
						,
						<button className="font-medium text-blue-500" type="button">
							Privary and Policy
						</button>
						and
						<button className="font-medium text-blue-500" type="button">
							Cookies Policy
						</button>
					</p>

					<button
						type="submit"
						className="w-full py-1 bg-blue-500 text-white rounded-sm"
						disabled={isSubmitting}
						aria-busy={isSubmitting}
					>
						{isSubmitting ? "Loading..." : "Sign Up"}
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default RegisterForm;
