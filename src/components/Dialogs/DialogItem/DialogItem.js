import { NavLink } from "react-router-dom";
import styles from "./DialogItem.module.css";

const DialogItem = ({ contactId, contactName }) => {

  return (
    <div className={styles.contactWrap}>
      <NavLink
        key={contactId}
        className={(navData) => (navData.isActive ? styles.active : "")}
        to={`/dialog/${contactId}`}
      >
        {contactName}
      </NavLink>
    </div>
  );
};


export default DialogItem;
