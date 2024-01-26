import { Link } from "react-router-dom";
// import Logo1 from "../assets/Logo1.png"


function FooterNav() {

    return (
        <>
            <footer>
                <div className="logoLink">
                    <Link to="/logo">
                    <img src="src/assets/Logo1.png" alt="Logo" className="logo" />
                    {/* <img src="src/assets/Logo2.png" alt="Logo" className="logo" /> */}
                    </Link>
                </div>
                <div className="NavFooter">
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
                </div>
                <div className="contactLink">
                    <Link to="/contact">
                        <p>Click Here to Begin Working with ME!</p>
                    </Link>
                </div>

            </footer>
        </>
    )
}

export default FooterNav