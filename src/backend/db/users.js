import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

export const users = [
  {
    _id: uuid(),
    firstName: "anonx",
    lastName: "Satya",
    email: "anonxSatya@tube.com",
    password: "anonx",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
