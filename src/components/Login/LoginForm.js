import { Formik, Form, Field, ErrorMessage } from "formik";
import {  Form as FormBootstrap,  Button } from "react-bootstrap";
import * as Yup from "yup";


 const LoginSchema = Yup.object().shape({
   password: Yup.string()
     .min(2, "Too Short!")
     .max(20, "Too Long!")
    //  .matches(
    //    /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
    //    "Password must be strong."
    //  )
     .required("Required"),
   email: Yup.string().email("Invalid email").required("Required"),
 });

const LoginForm = ({login}) => {

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "", rememberMe: true }}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            login(values.email, values.password, values.rememberMe);
            setSubmitting(false);
            resetForm();
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <FormBootstrap.Label>Email</FormBootstrap.Label>
            <FormBootstrap.Group>
              <Field
                type="email"
                name="email"
                value={values.email}
                className="w-100"
              />
            </FormBootstrap.Group>
            <ErrorMessage
              name="email"
              component="div"
              className="errorMessage"
            />
            <FormBootstrap.Label className="mt-2">Password</FormBootstrap.Label>
            <FormBootstrap.Group>
              <Field
                type="password"
                name="password"
                className="w-100"
                value={values.password}
              />
            </FormBootstrap.Group>
            <ErrorMessage
              name="password"
              component="div"
              className="errorMessage"
            />

            <label className="my-2">
              <Field
                type="checkbox"
                name="rememberMe"
                value="rememberMe"
                checked={values.rememberMe}
              />
              Remember me
            </label>

            <Button
              type="submit"
              className="w-100"
              disabled={isSubmitting}
              variant="dark"
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
