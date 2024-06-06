import { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";

export const useUsers = () => {
  const users = useContext(UserContext);

  return users;
};
