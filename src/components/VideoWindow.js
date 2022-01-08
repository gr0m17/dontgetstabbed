import { useRef, useState } from "react";
import VIDEO_ARRAY from "./VideoArray";
const VideoWindow = (props) => {
  const vidRef = useRef(null);
  const [showPlay, setShowPlay] = useState(true);
  console.log(props);

  const handlePlayVideo = () => {
    vidRef.current.play();
    setShowPlay(false);
  };
  return (
    <div>
      <video
        ref={vidRef}
        className="videoBox"
        id="videoPlayerID"
        onEnded={props.endedHandler}
        autoPlay={"autoplay"}
        controls=""
        playsInline
        src={props.src || VIDEO_ARRAY[1]}
      />
      {showPlay && (
        <button
          className="buttons"
          id="playButton"
          onClick={() => {
            handlePlayVideo();
          }}
        >
          Start Game!
        </button>
      )}
    </div>
  );
};

export default VideoWindow;
