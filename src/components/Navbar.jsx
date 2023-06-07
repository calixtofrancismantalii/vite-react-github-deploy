import "../assets/styles/navbar.css";
import reactLogo from "../assets/react.svg";
import githubLogo from "../assets/github.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <nav>
      <div className="title-logo">
        <img src={reactLogo} alt="React logo" width="40rem" />
      </div>
      <SearchBar />
      <ul>
        <li>
          <a href="#">Learn</a>
        </li>
        <li>
          <a href="#">Reference</a>
        </li>
        <li>
          <a href="#">Community</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a>
            <FontAwesomeIcon
              icon={faCircleHalfStroke}
              style={{ color: "#fafafa" }}
              className="nav-icons linkIcon"
            />
          </a>
        </li>
        <li>
          <a>
            <img
              src={githubLogo}
              alt="GitHub logo"
              width="20rem"
              className="linkIcon"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
