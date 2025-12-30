import Badge from "./Badge";
import Button from "./Button";

type ModalProps = {
  name: string;
  role: string;
  team: string;
  website: string;
  contactInfo: string;
  otherDetails: string;
};

const Modal = ({
  name,
  role,
  team,
  website,
  contactInfo,
  otherDetails,
}: ModalProps) => {
  return (
    <div className="modal">
      <Badge color="first">Admin</Badge>
      <p className="title">{name}</p>
      <p className="text-large">{role}</p>
      <p className="text-medium">Team: {team}</p>
      <p className="subtitle">{website}</p>
      <p className="text-medium">Contact Information:</p>
      <p className="url">{contactInfo}</p>
      <p className="text-medium">Other Details:</p>
      <p className="subtitle">{otherDetails}</p>
      <div className="modal-close-container">
        <Button type="button-slim">Close</Button>
      </div>
    </div>
  );
};

export default Modal;
