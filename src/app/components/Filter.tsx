import { useFilterUsers } from "../hooks/useFilterUsers";
import { filters } from "../constants";
import Badge from "./Badge";
import Card from "./Card";

type FilterProps = {
  searchText: string;
};

const Filter = ({ searchText }: FilterProps) => {
  const filteredUsers = useFilterUsers(searchText);

  return (
    <div className="filter-container">
      <div className="filter">
        <span className="text-medium">FILTER BY:</span>{" "}
        {filters.map((filter) => {
          const { color, role } = filter;
          return (
            <div key={role}>
              <Badge color={color}>{role}</Badge>
            </div>
          );
        })}
      </div>
      <div className="filter-separator" />
      <div className="search-grid">
        {filteredUsers.map((user, key) => (
          <Card
            key={key}
            name={user.name}
            role={user.role}
            team={user.team}
            email={user.email}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;
