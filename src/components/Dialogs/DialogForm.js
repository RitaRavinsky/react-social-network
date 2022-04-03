import { Formik, Form, Field, ErrorMessage } from "formik";
import { Form as FormBootstrap, Button } from "react-bootstrap";
import * as Yup from "yup";
import styles from "./Dialogs.module.css";


// validation schema
const DialogFormSchema = Yup.object().shape({
  newPost: Yup.string().min(2, "Too Short!").max(200, "Too Long!").trim(),
  // .required("Required"),
});


const DialogForm = ({ onAddNewMessage }) => {
  return (
    <div className={styles.newMessageForm + " mt-auto w-100 px-4 py-4"}>
      <Formik
        initialValues={{ newMessage: "" }}
        validationSchema={DialogFormSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
             onAddNewMessage(values.newMessage);
            setSubmitting(false);
            resetForm();
          }, 400);
        }}
      >
        {({ values, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <FormBootstrap.Group>
              <Field
                component="textarea"
                name="newMessage"
                value={values.newMessage}
                className="w-100"
                rows={3}
                placeholder="Type your message..."
              />
            </FormBootstrap.Group>
            <ErrorMessage
              name="newMessage"
              component="div"
              className="errorMessage"
            />

            <Button type="submit" disabled={isSubmitting} variant="light">
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
 
export default DialogForm;