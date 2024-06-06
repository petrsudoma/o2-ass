import { createContext, FC, PropsWithChildren, useState } from "react";
import { useQuery } from "react-query";
import { getUsersEndpoint } from "../endpoints/getUsersEndpoint";
import { User } from "../types/User";

export const UserContext = createContext<User[]>([]);

export const UserContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  useQuery({
    queryKey: "users",
    queryFn: getUsersEndpoint,
    onSuccess: (value) => setUsers(value),
  });

  return <UserContext.Provider value={users}>{children}</UserContext.Provider>;
};
