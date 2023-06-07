import "../assets/styles/videoOutput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import videoThumbnail from "../assets/videoThumbnail.png";

function VideoOutput() {
  return (
    <div className="videoWrapper row">
      <div className="col-3">
        <img
          src={videoThumbnail}
          alt="Video thumbnail"
          className="videoThumbnail"
          width="100%"
        />
      </div>
      <div className="col-8">
        <h6>My video</h6>
        <span>Video description</span>
      </div>
      <div className="col-1">
        <FontAwesomeIcon icon={faHeart} />
      </div>
    </div>
  );
}

export default VideoOutput;
