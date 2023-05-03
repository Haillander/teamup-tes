import Logo from "../images/tup.png";
import "./Header.css";
// import "./LoginButton.css"

// var test = 'casimiro'; header

const Header = ({ handleLogout }) => {
  return (
    <div className="header">
      <div className="logo-navbar">
        <a href="/">
          <img className="logo" src={Logo} alt="ProfilePicture" />
        </a>
        <ul>
          <li>
            <a href="/home">HOME</a>
          </li>
          <li>
            <a href="/events">EVENTS</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li
            onClick={() => {
              handleLogout();
            }}
          >
            <a href="/">Logout</a>
          </li>
        </ul>
      </div>
      <div>
        <p style={{ fontSize: "16px" }}>
          <strong>WELCOME</strong>{" "}
        </p>
        <p style={{ fontSize: "16px" }}>
          <strong style={{ color: "orange" }}>
            {JSON.parse(localStorage.getItem("profile"))?.userLogin}
          </strong>
        </p>
      </div>
    </div>
  );
};

export default Header;
