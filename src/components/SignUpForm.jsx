import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Form, Formik, ErrorMessage  } from "formik";
import Card from "@mui/material/Card";
import validationSchema from "../validations/SignUpValidation";

const SignUpForm = () => {
  const initialValue = {
    name: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  };

  const handleOnSubmit = (values) => {
    console.log("values ===>", values);
  };

  return (
    <Card className="mt-5 px-4 py-8 mx-auto" sx={{ maxWidth: 600 }}>
      <Formik
        initialValues={initialValue}
        onSubmit={handleOnSubmit}
        validationSchema={validationSchema}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <Form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>

              <TextField
                value={values.name}
                onChange={handleChange}
                label="Name"
                name="name"
                variant="outlined"
                color="success"
                focused
              />
              <ErrorMessage name="name" />
              <TextField
                value={values.lastname}
                onChange={handleChange}
                label="Last Name"
                name="lastName"
                variant="outlined"
                color="success"
                focused
              />
              <ErrorMessage name="lastName" />
       
              <TextField
                value={values.password}
                onChange={handleChange}
                label="Password"
                name="password"
                variant="outlined"
                color="success"
                focused
              />
              <ErrorMessage name="password" component="span"/>
              <TextField
                value={values.confirmPassword}
                onChange={handleChange}
                label="Confirm Password"
                name="confirmPassword"
                variant="outlined"
                color="success"
                focused
              />
              <ErrorMessage name="confirmPassword" />
          
            <Button variant="contained" size="large" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default SignUpForm;
