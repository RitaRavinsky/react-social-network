import { Formik, Form, Field, ErrorMessage } from "formik";
import { Form as FormBootstrap, Button } from "react-bootstrap";
import * as Yup from "yup";

// validation schema
const NewPostFormSchema = Yup.object().shape({
  newPost: Yup.string().min(2, "Too Short!").max(200, "Too Long!").trim(),
  // .required("Required"),
});

const NewPostForm = ({ onAddNewPost }) => {
  return (
    <div>
      <Formik
        initialValues={{ newPost: "" }}
        validationSchema={NewPostFormSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            onAddNewPost(values.newPost);
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
                name="newPost"
                value={values.newPost}
                className="w-100"
                rows={3}
                placeholder="Type your new post..."
              />
            </FormBootstrap.Group>
            <ErrorMessage
              name="newPost"
              component="div"
              className="errorMessage"
            />

            <Button
              type="submit"
                className="mt-2"
              disabled={isSubmitting}
              variant="dark"
            >
              Post
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewPostForm;
