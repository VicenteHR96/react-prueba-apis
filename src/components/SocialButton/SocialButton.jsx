import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialButton = ({ icon, colorHover }) => {
  return (
    <div className="rrssContainer">
      <FontAwesomeIcon onMouseOver={colorHover} icon={icon} />
    </div>
  );
};

export default SocialButton;
