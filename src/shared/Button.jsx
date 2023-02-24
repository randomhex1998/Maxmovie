const Button = ({ btnText, btnId = "#", btnIco = "#" }) => {
  return (
    <a href="#" className="btn" id={btnId}>
      <i className={btnIco}></i>
      {btnText}
    </a>
  );
};

export default Button;
