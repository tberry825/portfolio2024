import { Link } from "react-router-dom";

function NavBar() {

  return (
    <>
      <header>
        {/* <Link to="/Logo">
          <p>Link to Logo</p>
        </Link> */}
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

      </header>


    </>
  )
}

export default NavBar