import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = ({ dialogsPage, onAddNewMessage, onMessageInput, isAuth }) => {
  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  // create DialogItem componets array
  let dialogComponents = dialogsPage.dialogs.map((dialog) => (
    <DialogItem
      contactId={dialog.contactId}
      contactName={dialog.contactName}
      key={dialog.contactId}
    />
  ));

  // create Message componets array
  let messageComponents = dialogsPage.messages.map((message) => (
    <Message message={message.message} key={message.id} />
  ));

  let newMessageElement = React.createRef();
  const handleAddNewMessage = () => {
    onAddNewMessage();
  };

  const handleMessageInput = () => {
    let text = newMessageElement.current.value;
    onMessageInput(text);
  };

  return (
    <section className={styles.dialogsWrapper}>
      <Row>
        <Col md={3} className={styles.dialogs + " pt-4 "}>
          {dialogComponents}
        </Col>
        <Col className={styles.dialogMessages}>
          <div className="pt-4 d-flex align-items-start flex-column">
            <div className="messagesWrap px-4 w-100">{messageComponents}</div>
            <Form
              className={
                styles.newMessageForm + " mt-auto w-100 px-4 pt-2 pb-4"
              }
            >
              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>New Post</Form.Label>
                <Form.Control
                  ref={newMessageElement}
                  onChange={handleMessageInput}
                  as="textarea"
                  rows={3}
                  value={dialogsPage.newMessageBody}
                  placeholder="Type your message"
                />
              </Form.Group>
              <Button variant="light" onClick={handleAddNewMessage}>
                Send
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Dialogs;
