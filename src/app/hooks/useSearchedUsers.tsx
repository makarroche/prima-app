import { User } from "../types/User";
import { user_information } from "../user_info/information";

export const useSearchedUsers = (searchText: string): User[] => {
  const searchedUsers = user_information.filter((user) =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return searchedUsers;
};
