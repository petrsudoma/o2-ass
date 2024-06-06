import axios from "axios";
import { User } from "../types/User";

export const getUsersEndpoint = async () =>
  (await axios.get<User[]>("https://jsonplaceholder.typicode.com/users")).data;
