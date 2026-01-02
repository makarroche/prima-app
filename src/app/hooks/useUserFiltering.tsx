import { User_Type } from "../types/Filter";
import { useSearchedUsers } from "./useSearchedUsers";
import { useState } from "react";

type UseUserFilteringProps = {
  searchText: string;
};

export const useUserFiltering = ({ searchText }: UseUserFilteringProps) => {
  const searchedUsers = useSearchedUsers(searchText);
  const [activeFilter, setActiveFilter] = useState<User_Type | null>(null);
  const [filteredUsers, setFilteredUsers] = useState(searchedUsers);

  const isFilterActive = (user_type: User_Type) =>
    (user_type !== null && activeFilter === user_type) || activeFilter === null;

  const handleFilterChange = (user_type: User_Type) => {
    setActiveFilter(user_type);
    const filteredUsers = searchedUsers.filter(
      (user) => user.user_type === user_type
    );
    setFilteredUsers(filteredUsers);
  };

  const handleClearFilters = () => {
    setActiveFilter(null);
    setFilteredUsers(searchedUsers);
  };
  return {
    activeFilter,
    filteredUsers,
    isFilterActive,
    handleFilterChange,
    handleClearFilters,
  };
};
