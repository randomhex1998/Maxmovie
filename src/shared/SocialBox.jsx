const SocialBox = ({ SclIco, Scltxt }) => {
  return (
    <a href="#" className="social-box">
      <section className="social-ico">
        <i className={SclIco}></i>
      </section>
      <section className="social-txt">{Scltxt}</section>
    </a>
  );
};

export default SocialBox;
