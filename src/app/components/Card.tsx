import Badge from "./Badge";
import Button from "./Button";

type CardProps = {
  name: string;
  role: string;
  team: string;
  email: string;
};

const Card = ({ name, role, team, email }: CardProps) => {
  return (
    <div className="card">
      <Badge color="first">Badge</Badge>
      <p className="title">{name}</p>
      <p className="text-large">{role}</p>
      <p className="text-medium">Team: {team}</p>
      <p className="text-medium">Contact Information:</p>
      <p className="url">{email}</p>
      <Button type="button-slim">View details</Button>
    </div>
  );
};

export default Card;
