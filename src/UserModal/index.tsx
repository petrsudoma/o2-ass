import { FC, useContext } from "react";
import { UserContext } from "../context/UserContextProvider";
import classes from "./index.module.css";

type Props = {
  id: number;
  closeUserModal: () => void;
};

export const UserModal: FC<Props> = ({ id, closeUserModal }) => {
  const users = useContext(UserContext);

  const user = users.find(({ id: userId }) => userId === id);

  return (
    <div className={classes.userInfo}>
      <button onClick={closeUserModal}>Zavrit</button>

      <h1>{user?.name}</h1>

      <p>Email: {user?.email}</p>
      <p>Phone: {user?.phone}</p>
      <p>Website: {user?.website}</p>
    </div>
  );
};
