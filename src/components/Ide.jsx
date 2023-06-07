import "../assets/styles/ide.css";
import VideoCode from "./VideoCode";
import VideoOutput from "./VideoOutput";

function Ide() {
  return (
    <div className="ideWindow-wrapper row container">
      <div className="col-6">
        <div className="ideWindow">
          <label>Video.js</label>
          <VideoCode />
        </div>
      </div>
      <div className="col-6">
        <div className="ideLive">
          <VideoOutput />
        </div>
      </div>
    </div>
  );
}

export default Ide;
