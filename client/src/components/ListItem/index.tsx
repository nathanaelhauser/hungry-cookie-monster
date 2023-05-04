import styles from "./styles.module.scss";

type ListItemProps = {
  id: string;
  name: string;
  onClick?: () => void;
};

const ListItem = ({ id, name, onClick }: ListItemProps) => {
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
