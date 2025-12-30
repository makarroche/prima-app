import { useState } from "react";
import Badge from "./Badge";
import Button from "./Button";
import Modal from "./Modal";

type CardProps = {
  name: string;
  role: string;
  team: string;
  email: string;
  user_type: string;
  otherDetails: string;
};

const Card = ({
  name,
  role,
  team,
  email,
  user_type,
  otherDetails,
}: CardProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="card">
      <Badge
        color={
          user_type as
            | "admin"
            | "editor"
            | "viewer"
            | "guest"
            | "owner"
            | "inactive"
        }
        active={true}
        type="display"
      >
        {user_type}
      </Badge>
      <span className="title">{name}</span>
      <span className="text-medium">{role}</span>
      <div className="team-container">
        <span className="text-small">Team:</span>
        <span className="text-small-bold">{team}</span>
      </div>
      <div className="team-container">
        <span className="text-small">Contact Information:</span>
        <span className="url">{email}</span>
      </div>
      <Button
        type="button-slim"
        aria-label="view details"
        onClick={() => setModalOpen(true)}
      >
        View details
      </Button>
      {modalOpen && (
        <Modal
          name={name}
          role={role}
          team={team}
          email={email}
          otherDetails={otherDetails}
          user_type={user_type}
          setModalOpen={setModalOpen}
        />
      )}
    </div>
  );
};

export default Card;
