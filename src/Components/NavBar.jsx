import { Link } from "react-router-dom";
// import TapLogo2024 from "../assets/TapLogo2024";

function NavBar() {
  return (
    <>
      <header>
        <div className="navContainer">
          <div className="NavLogoLink">
            <Link to="/">
              <img src="src/assets/TapLogo2024.png" alt="Logo" className="logo" />
              {/*<img src="src/assets/Logo2.png" alt="Logo" className="logo" />*/}
            </Link>
          </div>
          <div className="navLink">
            {/* <Link to="/">
              <p>Home</p>
            </Link> */}
            <Link to="/adprof">
              <p>Admin Professional</p>
            </Link>
            <Link to="/grapdesign">
              <p>Graphic Designer</p>
            </Link>
            <Link to="/frontend">
              <p>Frontend Developer</p>
            </Link>
            <Link to="/portfolio">
              <p>Portfolio</p>
            </Link>
            <Link to="/contact">
              <p>Contact</p>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
