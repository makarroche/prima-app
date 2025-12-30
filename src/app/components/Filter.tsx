import { useSearchedUsers } from "../hooks/useSearchedUsers";
import { filters } from "../constants";
import Badge from "./Badge";
import Card from "./Card";
import Feedback from "./Feedback";
import { useState } from "react";
import { User_Type } from "../types/Filter";
import { User } from "../types/User";

type FilterProps = {
  searchText: string;
  searchClick: boolean;
};

const Filter = ({ searchText, searchClick }: FilterProps) => {
  const searchedUsers = useSearchedUsers(searchText);
  const [activeFilter, setActiveFilter] = useState<User_Type | null>(null);
  const [filteredUsers, setFilteredUsers] = useState<User[]>(searchedUsers);

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

  return (
    <div className="filter-container">
      <div className="filter">
        <span className="text-medium">FILTER BY:</span>{" "}
        {filters.map((user_type, key) => {
          return (
            <button
              className="button-hidden"
              key={key}
              onClick={() => handleFilterChange(user_type)}
              aria-label={user_type}
            >
              <Badge
                color={user_type}
                active={isFilterActive(user_type)}
                type="clickable"
              >
                {user_type}
              </Badge>
            </button>
          );
        })}
        {activeFilter !== null && (
          <button className="clear-filter" onClick={handleClearFilters}>
            Clear
          </button>
        )}
      </div>
      <div className="filter-separator" />
      <div className="search-grid">
        {filteredUsers &&
          searchClick &&
          filteredUsers.length > 0 &&
          filteredUsers.map((user, key) => (
            <Card
              key={key}
              name={user.name}
              role={user.role}
              team={user.team}
              email={user.email}
              user_type={user.user_type}
              otherDetails={user.other_details || ""}
            />
          ))}
        {filteredUsers && filteredUsers.length === 0 && (
          <div className="feedback-container">
            <Feedback />
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
