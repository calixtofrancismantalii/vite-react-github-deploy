import "../assets/styles/interfaces.css";
import Ide from "./Ide";

function Interfaces() {
  return (
    <section className="main-content-section bg-dark">
      <div className="container">
        <div className="textContent row">
          <h1>Create user interfaces from components</h1>

          <h5>
            React lets you build user interfaces out of individual pieces called
            components. Create your own React components like
            <span className="highLightGrey rounded">Thumbnail</span>,
            <span className="highLightGrey rounded"> LikeButton</span>, and
            <span className="highLightGrey rounded">Video</span>. Then combine
            them into entire screens, pages, and apps.
          </h5>

          <Ide />

          <h5>
            Whether you work on your own or with thousands of other developers,
            using React feels the same. It is designed to let you seamlessly
            combine components written by independent people, teams, and
            organizations.
          </h5>
        </div>
      </div>
    </section>
  );
}

export default Interfaces;
