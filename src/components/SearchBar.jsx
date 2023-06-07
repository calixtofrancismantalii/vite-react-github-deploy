import "../assets/styles/searchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  return (
    <form>
      <div className="form-group">
        <button>
          {" "}
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#ebebeb" }}
            id="searchIcon"
          />
        </button>
        <input
          type="text"
          class="form-control"
          id="srch"
          placeholder="Search"
        />
      </div>
    </form>
  );
}

export default SearchBar;
