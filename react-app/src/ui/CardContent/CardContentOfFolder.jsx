import "./CardContent.css";

export const CardContentOfFolder = ({ elapsedTime, description, created_at, isHovered }) => {
  const className = isHovered ? "CardContent CardContent-hovered" : "CardContent";

  return (
    <div className={className}>
      {/* <span className="CardContent-elapsed-time">{elapsedTime}</span> */}
      <p className="CardContent-description">{description}</p>
      <span className="CardContent-created-at">{created_at}</span>
    </div>
  );
};
