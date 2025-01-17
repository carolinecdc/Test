import logo from "../../assets/images/logo.png";

export default function Logo() {
  return (
    <a href="/" className="text-white text-decoration-none d-inline">
      <img src={logo} alt="logo" className="img-responsive" />
    </a>
  );
}
