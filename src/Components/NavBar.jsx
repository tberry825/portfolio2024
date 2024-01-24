import { Link } from "react-router-dom";

function NavBar() {

  return (
    <>
      <header>
        <div className="NavLogoLink">
          <Link to="/logo">
            {/* <img src="src/assets/Logo1.png" alt="Logo" className="logo" /> */}
            <img src="src/assets/Logo2.png" alt="Logo" className="logo" />          
          </Link>
        </div>
        <div className="navLink">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/adprof">
            <p>Admin Professional</p>
          </Link>
          <Link to="/grapdesign">
            <p>Graphic Designer</p>
          </Link>
          <Link to="/softdev">
            <p>Software Developer</p>
          </Link>
          <Link to="/portfolio">
            <p>Portfolio</p>
          </Link>
          <Link to="/contact">
            <p>Contact</p>
          </Link>
        </div>

      </header>


    </>
  )
}

export default NavBar