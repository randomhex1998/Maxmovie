const Button = ({ btnText, btnId = "#", btnIco = "#", btnLink="#" }) => {
  return (
    <a href={btnLink} className="btn" id={btnId}>
      <i className={btnIco}></i>
      {btnText}
    </a>
  );
};

export default Button;
