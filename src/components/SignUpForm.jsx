import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Form, Formik } from "formik";

const SignUpForm = () => {


    const initialValue = {
        name: "",
        lastname: "",
        password: "",
        confirmPassword: ""
    }

  return (
    <div className="flex flex-col items-center justify-center pt-5">
      <Formik initialValues={initialValue}>
        <Form className="flex flex-col gap-y-4">
          <div className="flex gap-x-2">
            <TextField
              label="Username"
              name="username"
              variant="outlined"
              color="success"
              focused
            />
            <TextField
              label="Lastname"
              name="lastname"
              variant="outlined"
              color="success"
              focused
            />
          </div>

          <div className="flex gap-x-2">
            <TextField
              label="Password"
              name="password"
              variant="outlined"
              color="success"
              focused
            />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              variant="outlined"
              color="success"
              focused
            />
          </div>
          <Button variant="contained" size="large">
            Submit
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUpForm;
