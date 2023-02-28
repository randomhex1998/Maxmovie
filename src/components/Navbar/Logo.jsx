import LogoImage from "../../img/logo.png";
import Bars from "./Bars";

const Logo = ({ barsClick }) => {
  return (
    <div className="logo-area">
      <img
        src={LogoImage}
        alt="logo"
        className="logo"
        width="90px"
        height="30px"
      />
      <Bars barsCLK={barsClick} />
    </div>
  );
};

export default Logo;
