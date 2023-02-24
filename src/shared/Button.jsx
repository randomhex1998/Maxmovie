const Button = ({ btnText, btnId }) => {
  return (
    <a href="#" className="btn" id={btnId}>
      {btnText}
    </a>
  );
};

export default Button;
