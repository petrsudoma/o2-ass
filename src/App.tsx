import { useContext, useState } from "react";
import { UserModal } from "./UserModal";
import { UserContext } from "./context/UserContextProvider";
import { filterUsers } from "./core/filterUsers";
import { formatAddress } from "./core/formatAddress";

export const App = () => {
  const [activeUserId, setActiveUserId] = useState<number | null>(null);
  const [filterPrompt, setFilterPrompt] = useState<string>("");

  const users = useContext(UserContext);

  const filteredUsers = filterUsers(users, filterPrompt);

  const closeUserModal = () => setActiveUserId(null);

  return (
    <>
      {activeUserId && (
        <UserModal closeUserModal={closeUserModal} id={activeUserId} />
      )}

      <h1>Users</h1>

      <input
        placeholder="type to search"
        onChange={(e) => {
          setFilterPrompt(e.target.value);
        }}
      />

      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers?.map((user) => (
            <tr key={user.id} onClick={() => setActiveUserId(user.id)}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{formatAddress(user.address)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
