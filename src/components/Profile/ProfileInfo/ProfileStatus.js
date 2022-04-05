import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { Form as FormBootstrap } from "react-bootstrap";
import styles from "./ProfileInfo.module.css";

const ProfileStatus = (props) => {
  let { profile, updateStatus } = props;
  if (!profile.aboutMe) {
    profile = {
      aboutMe: "hi there",
      lookingForAJob: true,
      lookingForAJobDescription: "looking for job",
    };
  }
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    updateStatus(status);
  };

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    updateStatus(newStatus);
  };

  return (
    <section className="profileStatus">
      <div className="statusWrap">
        {profile.aboutMe && profile.aboutMe}
        {!editMode && (
          <div className={styles.statusText} onDoubleClick={activateEditMode}>
            {status || "hi"}
          </div>
        )}
        {editMode && (
          <div className={styles.editStatus} onBlur={deactivateEditMode}>
            <Formik
              initialValues={{ newStatus: status || "hi" }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                  handleStatusChange(values.newStatus);
                  setSubmitting(false);
                  setEditMode(false);
                }, 400);
              }}
            >
              {({ values, handleSubmit, isSubmitting }) => (
                <Form onSubmit={handleSubmit} onBlur={handleSubmit}>
                  <FormBootstrap.Group>
                    <Field
                      name="newStatus"
                      placeholder={status || "hi"}
                      value={values.newStatus}
                      autoFocus={true}
                    />
                  </FormBootstrap.Group>
                </Form>
              )}
            </Formik>
          </div>
        )}
      </div>
      {profile.lookingForAJob && <i className="fa-solid fa-hand"></i>}
      <b>
        {profile.lookingForAJobDescription && profile.lookingForAJobDescription}
      </b>
    </section>
  );
};

export default ProfileStatus;
