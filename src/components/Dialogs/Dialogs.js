import React from "react";
import { Col, Row } from "react-bootstrap";
import DialogForm from "./DialogForm";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = ({ dialogsPage, onAddNewMessage, onMessageInput }) => {
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

  return (
    <section className={styles.dialogsWrapper}>
      <Row>
        <Col md={3} className={styles.dialogs + " pt-4 "}>
          {dialogComponents}
        </Col>
        <Col className={styles.dialogMessages}>
          <div className="pt-4 d-flex align-items-start flex-column">
            <div className="messagesWrap px-4 w-100">{messageComponents}</div>
            <DialogForm onAddNewMessage={onAddNewMessage} />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Dialogs;
