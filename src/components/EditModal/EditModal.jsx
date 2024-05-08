import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { Button, Container, Form, Icon, Modal } from "semantic-ui-react";
import { formatDate, postDateFormat } from "../../commonFunctions/formatFunctions";
import "./EditModal.scss";

const EditModal = (props) => {
  // const [formValidation, setFormValidation] = useState(false);

  const checkDate = (input, errorContent, inputDate, errors) => {
    // console.log('inputDate', inputDate);
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = formatDate(`${year}/${month}/${day}`);
    // console.log("currentDate", currentDate);

    if (inputDate === currentDate || inputDate > currentDate) {
      errors[input] = `Enter a valid ${errorContent}`;
    }

    return errors;
  };

  const runToast = (status) => {
    // console.log("toast 1");
    // console.log(status)
    if (status === "success") {
      toast.success("Form Submitted!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        // draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error("Cancelled", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        // draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    // console.log("toast 2");
  };

  // console.log('filteredEmp', props.filteredEmp);

  const callApi = () => {
    props.selectedEmp.empID = parseInt(formik.values.empId);
    props.selectedEmp.firstName = formik.values.firstName;
    props.selectedEmp.lastName = formik.values.lastName;
    props.selectedEmp.fullName = formik.values.fullName;
    props.selectedEmp.role = formik.values.role;
    props.selectedEmp.dob = formatDate(formik.values.dob);
    props.selectedEmp.doj = formatDate(formik.values.doj);
    props.selectedEmp.phoneNumber = formik.values.phoneNumber;
    props.selectedEmp.emailAddress = formik.values.emailAddress;
    props.selectedEmp.userName = formik.values.userName;
    props.selectedEmp.password = formik.values.password;
    props.selectedEmp.src = formik.values.src;
    props.selectedEmp.exp = parseInt(formik.values.exp);
    // axios.post("http://192.168.1.196:8080/employee/updateEmployee", {
    //   empId: parseInt(formik.values.empId),
    //   firstName: formik.values.firstName,
    //   lastName: formik.values.lastName,
    //   fullName: formik.values.fullName,
    //   role: formik.values.role,
    //   dob: formatDate(formik.values.dob),
    //   doj: formatDate(formik.values.doj),
    //   phoneNumber: formik.values.phoneNumber,
    //   emailAddress: formik.values.emailAddress,
    //   userName: formik.values.userName,
    //   password: formik.values.password,
    //   src: formik.values.src,
    //   exp: parseInt(formik.values.exp),
    // }).then(res => {
    //   props.setModalData(res.data.data[formik.values.empId - 1]); props.updatedEmployeeList(res.data.data); axios.get("http://192.168.1.196:8080/employee/listEmployee")
    //     .then((res) => {
    //       props.updatedEmployeeList(res.data.data);
    //     });
    // })
    // axios.get("http://192.168.1.196:8080/employee/listEmployee")
    //   .then(res => {
    //     // setTimeout(() => {
    //     console.log("---------------------------------", res.data.data)
    //     props.setFilteredEmp(res.data.data);
    //     console.log("---------------------------------", res.data.data)
    //     // }, 3000);
    //   })
  };

  const formik = useFormik({
    initialValues: {
      empId: props.selectedEmp.empID,
      firstName: props.selectedEmp.firstName,
      lastName: props.selectedEmp.lastName,
      fullName: props.selectedEmp.fullName,
      role: props.selectedEmp.role,
      dob: formatDate(props.selectedEmp.dob),
      doj: formatDate(props.selectedEmp.doj),
      phoneNumber: props.selectedEmp.phoneNumber,
      emailAddress: props.selectedEmp.emailAddress,
      userName: props.selectedEmp.userName,
      password: props.selectedEmp.password,
      src: props.selectedEmp.src,
      exp: props.selectedEmp.exp,
      showPassword: false,
    },
    onSubmit: (values, onSubmitProps) => {
      onSubmitProps.setSubmitting(false);
      // if (formValidation) {
      // console.log('edited', values.dob);
      // console.log("call post date", postDateFormat(values.dob))
      // axios
      //   .post("http://192.168.1.196:8080/employee/updateEmployee", {
      //     empId: parseInt(formik.values.empId),
      //     firstName: formik.values.firstName,
      //     lastName: formik.values.lastName,
      //     fullName: formik.values.fullName,
      //     role: formik.values.role,
      //     dob: postDateFormat(formik.values.dob),
      //     doj: postDateFormat(formik.values.doj),
      //     phoneNumber: formik.values.phoneNumber,
      //     emailAddress: formik.values.emailAddress,
      //     userName: formik.values.userName,
      //     password: formik.values.password,
      //     src: formik.values.src,
      //     exp: parseInt(formik.values.exp),
      //   })
      //   .then((res) => {
      //     props.updatedEmployeeList(res.data.data);
      //     props.setModalData(res.data.data);
      //     axios.get("http://192.168.1.196:8080/employee/listEmployee").then((res) => {
      //       props.updatedEmployeeList(res.data.data);
      //     });
      //   });

      // } else {
      //   console.log('error in emp details');
      // }
    },
    validate: (values) => {
      // setFormValidation(false);
      let errors = {};
      // const emailRegex = /^[a-z]+@[a-z]+\.[a-zA-Z]{2,4}$/;

      // setFormValidation(emailRegex.test(values.emailAddress));

      if (values.empId === "") {
        errors.empId = "Employee Id is required";
      }
      if (values.firstName === "") {
        errors.firstName = "First Name is required";
      }
      if (values.lastName === "") {
        errors.lastName = "Last Name is required";
      }
      if (values.fullName === "") {
        errors.fullName = "Full Name is required";
      }
      if (values.role === "") {
        errors.role = "Role is required";
      }
      if (values.dob === "") {
        errors.dob = "Date of Birth is required";
      } else {
        // errors.dob = "Enter a valid Date of Birth";
        checkDate("dob", "Date of Birth", values.dob, errors);
      }
      if (values.doj === "") {
        errors.doj = "Date of Joining is required";
      } else {
        checkDate("dob", "Date of Birth", values.dob, errors);
      }
      if (values.phoneNumber === "") {
        errors.phoneNumber = "Phone Number is required";
      } else if (values.phoneNumber.toString().length !== 10) {
        errors.phoneNumber = "Enter a 10 digit number";
      }
      if (values.emailAddress === "") {
        errors.emailAddress = "Email Address is required";
      }
      // else if (emailRegex.test(values.emailAddress)) {
      //   errors.emailAddress = "Enter a valid Email Address";
      // }
      if (values.userName === "") {
        errors.userName = "Username is required";
      }
      if (values.password === "") {
        errors.password = "Password is required";
      }
      if (values.src === "") {
        errors.src = "Photo source is required";
      }
      if (values.exp === "") {
        errors.exp = "Experience is required";
      }

      // if (Object.keys(errors).length === 0) {
      // setFormValidation(true);
      // }

      return errors;
    },
    validateOnChange: false,
    validateOnBlur: false,
  });

  // console.log("props", formatDate(props.selectedEmp.doj));
  // console.log(formik.values.doj);

  return (
    <Modal onClose={() => props.setOpenEdit(false)} open={props.openEdit} size="small">
      <ToastContainer />
      <Container className="edit-container">
        <Form onSubmit={formik.handleSubmit}>
          <Form.Input
            label="Employee Id"
            type="number"
            placeholder="Employee Id"
            name="empId"
            value={formik.values.empId}
            onChange={formik.handleChange}
            error={
              formik.errors.empId && {
                content: formik.errors.empId,
                pointing: "below",
              }
            }
          />
          <Form.Group widths="equal">
            <Form.Input
              label="First Name"
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.errors.firstName && {
                  content: formik.errors.firstName,
                  pointing: "below",
                }
              }
            />
            <Form.Input
              label="Last Name"
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={
                formik.errors.lastName && {
                  content: formik.errors.lastName,
                  pointing: "below",
                }
              }
            />
          </Form.Group>
          <Form.Input
            label="Full Name"
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            error={
              formik.errors.fullName && {
                content: formik.errors.fullName,
                pointing: "below",
              }
            }
          />
          <Form.Input
            label="Role"
            type="text"
            placeholder="Role"
            name="role"
            value={formik.values.role}
            onChange={formik.handleChange}
            error={
              formik.errors.role && {
                content: formik.errors.role,
                pointing: "below",
              }
            }
          />
          <Form.Group widths="equal">
            <Form.Input
              label="Date of Birth"
              type="text"
              name="dob"
              value={formik.values.dob}
              onChange={formik.handleChange}
              error={
                formik.errors.dob && {
                  content: formik.errors.dob,
                  pointing: "below",
                }
              }
            />
            <Form.Input
              label="Date of Joining"
              type="text"
              name="doj"
              value={formik.values.doj}
              onChange={formik.handleChange}
              error={
                formik.errors.doj && {
                  content: formik.errors.doj,
                  pointing: "below",
                }
              }
            />
          </Form.Group>
          <Form.Input
            label="Phone Number"
            type="number"
            placeholder="Phone Number"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            error={
              formik.errors.phoneNumber && {
                content: formik.errors.phoneNumber,
                pointing: "below",
              }
            }
          />
          <Form.Input
            label="Email Address"
            type="email"
            placeholder="Email Address"
            name="emailAddress"
            value={formik.values.emailAddress}
            onChange={formik.handleChange}
            error={
              formik.errors.emailAddress && {
                content: formik.errors.emailAddress,
                pointing: "below",
              }
            }
          />
          <Form.Group widths="equal">
            <Form.Input
              label="Username"
              type="text"
              placeholder="Username"
              name="userName"
              value={formik.values.userName}
              onChange={formik.handleChange}
              error={
                formik.errors.userName && {
                  content: formik.errors.userName,
                  pointing: "below",
                }
              }
            />
            <Form.Input
              label="Password"
              type={formik.values.showPassword ? "text" : "password"}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={
                formik.errors.password && {
                  content: formik.errors.password,
                  pointing: "below",
                }
              }
              icon={
                <Icon
                  name={formik.values.showPassword ? "eye" : "eye slash"}
                  link
                  onClick={() => {
                    formik.setFieldValue("showPassword", !formik.values.showPassword);
                  }}
                />
              }
            />
          </Form.Group>
          <Form.Input
            label="Photo"
            placeholder="Photo"
            name="src"
            value={formik.values.src}
            onChange={formik.handleChange}
            error={
              formik.errors.src && {
                content: formik.errors.src,
                pointing: "below",
              }
            }
          />
          <Form.Input
            label="Experience"
            type="number"
            placeholder="Experience"
            name="exp"
            value={formik.values.exp}
            onChange={formik.handleChange}
            error={
              formik.errors.exp && {
                content: formik.errors.exp,
                pointing: "below",
              }
            }
          />

          <Button
            icon="close"
            content="Cancel"
            type="submit"
            negative
            onClick={() => {
              runToast("cancel");
              // props.setOpenEdit(false)
              setTimeout(() => {
                props.setOpenEdit(false);
              }, 2000);
            }}
          />
          <Button
            icon="check"
            content="Submit"
            positive
            type="submit"
            onClick={() => {
              runToast("success");
              // props.setOpenEdit(false);
              callApi();
              setTimeout(() => {
                props.setOpenEdit(false);
              }, 2000);
            }}
          />
        </Form>
      </Container>
    </Modal>
  );
};

export default EditModal;
