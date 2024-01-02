import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Icon, Segment } from "semantic-ui-react";
import currentUser from "../../assets/data/currentUser.json";
import empData from "../../assets/data/employeesData.json";
import "./Login.scss";

const Login = () => {
	const navigate = useNavigate();
	const [formSubmitted, setFormSubmitted] = useState(false);

	const formik = useFormik({
		initialValues: {
			username: "",
			password: "",
			showPassword: false,
		},
		onSubmit: (values, onSubmitProps) => {
			onSubmitProps.setSubmitting(false);
		},
		validate: (values) => {
			let errors = {};
			if (formSubmitted) {
				if (!values.username) {
					errors.username = "Username is required";
				}

				if (!values.password) {
					errors.password = "Password is required";
				}

				if (!errors.username && !errors.password) {
					let user = empData.employees.filter(
						(emp, index) => emp.userName === values.username
					);

					if (user.length > 0) {
						if (user[0].password === values.password) {
							Object.assign(currentUser[0], { username: formik.values.username, password: formik.values.password })
							navigate("/dashboard");
						} else {
							errors.password = "Wrong Password";
						}
					} else {
						errors.username = "User doesn't exists";
					}
				}

			}
			return errors;
		},
		validateOnBlur: false,
	});


	const submitHandler = () => {
		setFormSubmitted(!formSubmitted);
	}

	const changeHandler = () => {
		setFormSubmitted(false);
	}


	return (
		<div className="login-container">
			<div className="login">
				<div className="login-logo-container">
					<img className="login-logo-img" src={ require("../../assets/images/hr-login.avif") } alt="HR Logo" />
				</div>
				<div className="login-form-container">
					<img src={ require("../../assets/images/hr-icon.jpeg") } alt="hr-logo" className="hr-logo-round" />
					<h1 className="login-title"><span>HR</span> Portal</h1>
					<Segment className="segment">
						<Form className="login-form" onSubmit={ () => { formik.handleSubmit(); } }  >
							<div className="form-field">
								<Form.Field>
									<Form.Input
										required
										label="Username"
										type="text"
										name="username"
										placeholder="Username"
										value={ formik.values.username }
										onChange={ formik.handleChange }
										onBlur={ formik.handleBlur }
										onKeyPress={ changeHandler }
										error={ formSubmitted && formik.errors.username && {
											content: formik.errors.username,
											pointing: 'below',
										} }
									/>
								</Form.Field>
							</div>
							<div className="form-field">
								<Form.Field>
									<Form.Input
										required
										label="Password"
										type={ formik.values.showPassword ? "text" : "password" }
										name="password"
										placeholder="Password"
										value={ formik.values.password }
										onChange={ formik.handleChange }
										onKeyPress={ changeHandler }
										onBlur={ formik.handleBlur }
										error={ formSubmitted && formik.errors.password && {
											content: formik.errors.password,
											pointing: 'above',
										} }
										icon={
											<Icon
												name={ formik.values.showPassword ? "eye" : "eye slash" }
												link
												onClick={ () =>
													formik.setFieldValue(
														"showPassword",
														!formik.values.showPassword
													)
												}
											/>
										}
									/>
								</Form.Field>
							</div>
							<Button fluid primary onClick={ () => { submitHandler(); } } >
								Login
							</Button>
						</Form>
					</Segment>
				</div>
			</div>
		</div>
	);
};

export default Login;
