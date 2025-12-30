import { User_Type } from "../types/Filter";

type BadgeProps = {
  children: React.ReactNode;
  color: User_Type;
  active: boolean;
  type: "display" | "clickable";
};

const Badge = ({ children, color, active, type }: BadgeProps) => {
  return (
    <div
      className={`badge badge-${color} ${!active ? "badge-not-used" : ""} ${
        type === "clickable" ? "badge-clickable" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Badge;
