import { User_Type } from "./Filter";

export type User = {
  name: string;
  role: string;
  team: string;
  email: string;
  user_type: User_Type;
  other_details: string;
};

export default User;
