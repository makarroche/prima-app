import { user_information } from "../../user_info/information";

export const useFilterUsers = (searchText: string) => {
  return user_information.filter((user) =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  );
};
