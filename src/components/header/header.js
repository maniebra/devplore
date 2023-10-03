import logo from "../../icons/icon.png";
import "./base.css";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="site-title">
        <div className="site-title-image">
          <img src={logo} alt="Logo" />
        </div>
        <div className="site-title-text">
          <h1>Devplore</h1>
        </div>
      </div>

      <div class="site-menu">
        <span>Home</span>
        <span>Courses</span>
        <span>Problemset</span>
      </div>
    </div>
  );
}

export default Header;
