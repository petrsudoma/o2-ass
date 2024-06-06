import { Address } from "../types/User";

export const formatAddress = (address: Address): string =>
  `${address.street} ${address.suite} ${address.city}`;
