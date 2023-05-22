import styles from "./ProfileIcons.module.css";

const ProfileIcons = (props) => {
  const { name, image } = props;

  return (
    <div className={styles.navContainer}>
      <button className={styles.iconButton}>
        <img className={styles.icon} src={image} alt={name} />
      </button>
      <p className={styles.word}>{name}</p>
    </div>
  );
};
export default ProfileIcons;
