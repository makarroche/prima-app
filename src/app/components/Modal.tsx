import { useEffect } from "react";
import Badge from "./Badge";
import Button from "./Button";
import { useHandleEscape } from "../hooks/useHandleEscape";
import { useHandleEnter } from "../hooks/useHandleEnter";

type ModalProps = {
  name: string;
  role: string;
  team: string;
  email: string;
  otherDetails: string;
  user_type: string;
  setModalOpen: (isOpen: boolean) => void;
};

const Modal = ({
  name,
  role,
  team,
  email,
  otherDetails,
  user_type,
  setModalOpen,
}: ModalProps) => {
  useHandleEscape(setModalOpen);
  useHandleEnter(setModalOpen);

  return (
    <div className="modal-overlay">
      <div className="modal" role="dialog">
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
        <div className="team-container">
          <span className="text-small">Other Details:</span>
          <span className="text-small-bold">{otherDetails}</span>
        </div>
        <div className="modal-close-container">
          <Button type="button-slim" onClick={() => setModalOpen(false)}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
