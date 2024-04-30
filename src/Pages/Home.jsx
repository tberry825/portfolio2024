import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import portfoliopng1 from "../assets/portfoliopng1.png";
import meportfolioIntro from "../assets/meportfolioIntro.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="homeContainer">
        <NavBar />
        <section className="container">
          <div className="heroText">
            <p className="welcomeText">Welcome to</p>
            <p className="tapText">T.A.P.S</p>
            <p className="heroTextTitle">
              Tanesha's Admin Professional Services, <br />
              <br />
              Please choose a Service.
            </p>
            <div className="buttonContainer">
              <Link to="/grapdesign">
                <button className="heroButton">
                  <strong> Graphic Design</strong>
                </button>
              </Link>
              <Link to="/adprof">
                <button className="heroButton">
                  <strong> Admin Professional</strong>
                </button>
              </Link>
              <Link to="/frontend">
                <button className="heroButton">
                  <strong> Frontend Developer</strong>
                </button>
              </Link>
            </div>
          </div>
          <div className="heroImage">
            <img
              className="leftSideHeroImage"
              src={portfoliopng1}
              alt="my pic"
            />
          </div>
        </section>
        <section className="introductionHero">
          <div className="imageContainer">
            <img
              className="leftSideHeroImage"
              src={meportfolioIntro}
              alt="my pic"
            />
          </div>
          <div className="textContainer">
            <p className="introText">
              Hello, I'm{" "}
              <span className="spanIntroText">
                <strong>Tanesha Berry</strong>
              </span>
              .<br />
              <br /> What I do to help make your business run better is...{" "}
              <br />
              <br />I bring over 5 years of expertise as a Administrative
              Professional and over 30+ years in corporate America to the table.
              <br />
              <br />
              With a keen eye for detail and a knack for organization, I excel
              in various tasks including Email Management, Administrative
              Support, Microsoft Office Suite / Google Suite proficiency,
              Calendar Management, and Written Communication. <br />
              <br />
              My organizational skills are top-notch, ensuring efficient
              workflows, while my excellent communication abilities foster
              effective collaboration. <br />
              <br />
              Moreover, I also have a Degree in Graphic Design, and an extensive
              knowledge of Frontend Development making me a versatile and
              valuable addition to your team.{" "}
              <strong>Let's work together </strong>to streamline your operations
              and achieve your goals.
            </p>
            <button>Read More</button>
          </div>
        </section>
        <section></section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
