import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import portfoliopng1 from "../assets/portfoliopng1.png";
import meportfolioIntro from "../assets/meportfolioIntro.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <NavBar />
      <section className="container">
        <div className="heroText">
          <p className="welcomeText">Welcome to</p>
          <p className="tapText">T.A.P.S</p>
          <p className="heroTextTitle">Tanesha's Admin Professional Services, <br /><br />Please choose a Service.</p>
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
          <img className="leftSideHeroImage" src={portfoliopng1} alt="my pic" />
        </div>
      </section>
      <section className="introductionHero">
        <div>
          <img
            className="leftSideHeroImage"
            src={meportfolioIntro}
            alt="my pic"
          />
        </div>
        <div>
          <p className="introText">
            Hello, I'm{" "}
            <span className="spanIntroText">
              <strong>Tanesha Berry</strong>
            </span>
            .<br />
            <br /> I bring over 5 years of expertise as a Administrative
            Professional and over 30+ years in corporate America to the table.{" "}
            <br />
            <br />
            With a keen eye for detail and a knack for organization, I excel in
            various tasks including Email Management, Administrative Support,
            Microsoft Office Suite / Google Suite proficiency, Calendar
            Management, and Written Communication. <br />
            <br />
            My organizational skills are top-notch, ensuring efficient
            workflows, while my excellent communication abilities foster
            effective collaboration. <br />
            <br />
            Moreover, I also have a Degree in Graphic Design, and an extensive
            knowledge if Frontend Development making me a versatile and valuable
            addition to your team. Let's work together to streamline your
            operations and achieve your goals.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
