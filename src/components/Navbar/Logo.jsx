import LogoImage from "../../img/logo.png";

const Logo = () => {
  return (
    <div className="logo-area">
      <img
        src={LogoImage}
        alt="logo"
        className="logo"
        width="90px"
        height="30px"
      />
    </div>
  );
};

export default Logo;
