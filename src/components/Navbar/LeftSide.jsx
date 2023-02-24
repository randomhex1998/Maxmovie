import Button from "../../shared/Button";

const LeftSide = () => {
  return (
    <section className="left-side-area">
      <Button btnText="ورود" btnIco="fa-solid fa-user" btnId="user-nav-lg" />
      <Button btnText="جستجو" btnIco="fa-solid fa-magnifying-glass" btnId="sch-nav-lg" />
      <Button btnText="" btnIco="fa-solid fa-magnifying-glass" btnId="sch-nav-sm" />
      <Button btnText="" btnIco="fa-solid fa-user" btnId="user-nav-sm" />
    </section>
  );
};

export default LeftSide;
