import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Button, Form, Icon, Segment } from "semantic-ui-react";
import empData from "../../assets/data/employeesData.json";
import { HrContext } from "../../contexts/HrContext/HrContext";
import "./Login.scss";
import { useEffect } from "react";

const Login = () => {
  const history = useHistory();
  const { setHr } = useContext(HrContext);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    toast.info("Username: romin, Password: pass", {
      position: "top-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "colored",
    })
  }, [])

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      showPassword: false,
    },
    onSubmit: (values, onSubmitProps) => {
      onSubmitProps.setSubmitting(false);
      submitHandler();
    },
    validate: (values) => {
      let errors = {};

      if (formSubmitted) {
        if (values.username && values.password) {
          if (!values.username) {
            errors.username = "Username is required";
          }

          if (!values.password) {
            errors.password = "Password is required";
          }
        }

        if (values.username && values.password) {
          let username = empData.filter((emp) => emp.userName === values.username);
          let password = empData.filter((emp) => emp.password === values.password);

          if (!username) {
            errors.username = "User doesn't exist";
            formik.setErrors({ username: "User doesn't exist" });
          }
          if (!password) {
            errors.password = "Wrong Password";
            formik.setErrors({ password: "Wrong Password" });
          }

          if (username && password) {
            let loggedUser = "";
            loggedUser = empData.filter((emp) => emp.userName === values.username && emp.password === values.password);
            loggedUser = loggedUser[0];

            console.log(loggedUser);

            if (loggedUser) {
              setHr(loggedUser.empID.toString());
              console.log("called hrId with", loggedUser.empID);
              history.push("/dashboard");
            }
          }

          // axios
          //   .post("http://192.168.1.196:8080/hr/login", {
          //     name: formik.values.username,
          //     password: formik.values.password,
          //   })
          //   .then((res) => {
          //     const { status, message, data } = res.data;
          //     console.log(status, "stst")
          //     if (status) {
          //       setHr(data.hrId);
          //       console.log("login ")
          //       history.push("/dashboard");
          //     } else if (message === "User doesn't exists") {
          //       errors.username = "User doesn't exist";
          //       formik.setErrors({ username: "User doesn't exist" });
          //     } else {
          //       errors.password = "Wrong Password";
          //       formik.setErrors({ password: "Wrong Password" });
          //     }
          //   })
          //   .catch((err) => {
          //     console.error("Axios Fetching Error:", err);
          //   });
        }
      }
      return errors;
    },
    validateOnChange: false,
    validateOnBlur: false,
  });

  const submitHandler = () => {
    setFormSubmitted(true);
  };

  return (
      <div className="login-container">
        <ToastContainer />
        <div className="login">
          <div className="login-logo-container">
            <img className="login-logo-img" src={require("../../assets/images/hr-login.avif")} alt="HR Logo" />
          </div>
          <div className="login-form-container">
            <img src={require("../../assets/images/hr-icon.jpeg")} alt="hr-logo" className="hr-logo-round" />
            <h1 className="login-title">
              <span>HR</span> Portal
            </h1>
            <Segment className="segment">
              <Form className="login-form" onSubmit={formik.handleSubmit}>
                <div className="form-field">
                  <Form.Field>
                    <Form.Input
                      label="Username"
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      onKeyPress={submitHandler}
                      error={
                        formik.errors.username && {
                          content: formik.errors.username,
                          pointing: "below",
                        }
                      }
                    />
                  </Form.Field>
                </div>
                <div className="form-field">
                  <Form.Field>
                    <Form.Input
                      label="Password"
                      type={formik.values.showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onKeyPress={submitHandler}
                      onBlur={formik.handleBlur}
                      error={
                        formik.errors.password && {
                          content: formik.errors.password,
                          pointing: "above",
                        }
                      }
                      icon={<Icon name={formik.values.showPassword ? "eye" : "eye slash"} link onClick={() => formik.setFieldValue("showPassword", !formik.values.showPassword)} />}
                    />
                  </Form.Field>
                </div>
                <Button
                  type="submit"
                  fluid
                  primary
                  onClick={() => {
                    submitHandler();
                  }}
                >
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
