import Container from "react-bootstrap/esm/Container";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer +" py-2"}>
      <Container>2022 &copy; Rita Ravinsky</Container>
    </footer>
  );
};

export default Footer;
