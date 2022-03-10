import styles from "./Friends.module.css";

const Friends = () => {
  return (
    <section className={styles.friendsWrap}>
      <h2>Friends</h2>
      <div className={styles.friends}>
        <section className={styles.friend}>
          <img src="https://picsum.photos/100/100" alt="" />
          <h6>Daniel Nikiforov</h6>
        </section>
        <section className={styles.friend}>
          <img src="https://picsum.photos/100/101" alt="" />
          <h6>Eitan Nikiforov</h6>
        </section>
        <section className={styles.friend}>
          <img src="https://picsum.photos/100/102" alt="" />
          <h6>Iris Nikiforov</h6>
        </section>
      </div>
    </section>
  );
};

export default Friends;
