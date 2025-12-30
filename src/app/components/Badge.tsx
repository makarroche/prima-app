type BadgeProps = {
  children: React.ReactNode;
  color: "first" | "second" | "third" | "fourth" | "fifth";
};

const Badge = ({ children, color }: BadgeProps) => {
  return <div className={`badge badge-${color}`}>{children}</div>;
};

export default Badge;
