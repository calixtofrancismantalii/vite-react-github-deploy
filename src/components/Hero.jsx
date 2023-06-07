import "../assets/styles/hero.css";
import reactLogo from "../assets/react.svg";

function Hero() {
  return (
    <section>
      <div id="hero">
        <div className="container">
          <img src={reactLogo} alt="React logo" width="120rem" />
        </div>
        <h1>React</h1>
        <h2>The library for web and native user interfaces</h2>
        <div id="heroBtnWraper" className="d-flex flex-wrap ">
          <button className="heroBtn" id="learReactBtn">
            Learn React
          </button>
          <button className="heroBtn" id="apiReferenceBtn">
            API Reference
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
