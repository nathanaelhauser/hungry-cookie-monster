import styles from "./styles.module.css";

type ListItemProps = {
  name: string;
  onClick?: () => void;
};

const ListItem = ({ name, onClick }: ListItemProps) => {
  return (
    <li
      className={styles.listItem}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default ListItem;
