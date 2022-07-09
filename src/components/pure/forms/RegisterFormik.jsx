import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";

//Models
import { ROLES } from "../../../models/roles.enum";

const registerSchema = yup.object().shape({
  username: yup
    .string()
    .min(6, "Username too short")
    .max(12, "Username too long")
    .required("Username is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  role: yup
    .string()
    .oneOf([ROLES.USER, ROLES.ADMIN], "You must select a Role: User / Admin")
    .required("Role is required"),
  password: yup
    .string()
    .min(8, "Password too short")
    .required("Password is required"),
  confirm: yup
    .string()
    .when("password", {
      is: (values) => (values && values.length > 0 ? true : false),
      then: yup.string().oneOf([yup.ref("password")], "¡Password must match!"),
    })
    .required("You must confirm the password"),
});

const RegisterFormik = () => {
  // let user = new User();
  // const submit = () => {   // };
  const navigate = useNavigate();
  const initalCredentials = {
    username: "",
    email: "",
    password: "",
    confirm: "",
    role: ROLES.USER,
  };
  return (
    <>
      <Formik
        // *** Initial values that the form will take
        initialValues={initalCredentials}
        // *** Yup Validation Schema
        validationSchema={registerSchema}
        // *** onSubmit Event
        onSubmit={async (values, { resetForm }) => {
          await new Promise((r) => setTimeout(r, 1000));
          // alert(JSON.stringify(values, null, 2));
          sessionStorage.setItem("credentials", JSON.stringify(values));
          resetForm();
          navigate("/");
        }}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <label htmlFor="username">Username</label>
            <Field
              id="username"
              name="username"
              placeholder="username"
              type="Your username"
            />
            {/* Username errors */}
            {errors.username && touched.username && (
              <ErrorMessage name="username" component="div" />
            )}
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="example@email.com"
              type="email"
            />
            {/* Email errors */}
            {errors.email && touched.email && (
              <ErrorMessage name="email" component="div" />
            )}
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              placeholder="password"
              type="password"
            />
            {/* Password errors */}
            {errors.password && touched.password && (
              <ErrorMessage name="password" component="div" />
            )}
            <label htmlFor="confirm">Confirm Password</label>
            <Field
              id="confirm"
              name="confirm"
              placeholder="confirm password"
              type="password"
            />
            {/*Confirm Password errors */}
            {errors.confirm && touched.confirm && (
              <ErrorMessage name="confirm" component="div" />
            )}
            <Button variant="contained" type="submit">
              Register Account
            </Button>
            {isSubmitting && <p>Sending your credentials...</p>}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegisterFormik;
