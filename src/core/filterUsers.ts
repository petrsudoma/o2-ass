import { User } from "../types/User";

export const filterUsers = (users: User[], prompt?: string): User[] => {
  if (!prompt) return users;

  return users.filter((user) => {
    const name = user.name.toLocaleLowerCase().replace(" ", "");

    return name.includes(prompt);
  });
};
