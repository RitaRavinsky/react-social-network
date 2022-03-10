import styles from "./Message.module.css";

const Message = ({ message }) => {
  return <div className={styles.message}>{message}</div>;
};

export default Message;
