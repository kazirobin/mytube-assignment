import VideoMedia from "./video.media.component";
import VideoDetails from "./video.details.component";

const VideoWrapper = ({ activeVideo }) => {
  return (
    <>
      {activeVideo && (
        <>
          <VideoMedia activeVideo={activeVideo} />
          <VideoDetails activeVideo={activeVideo} />
        </>
      )}
    </>
  );
};

export default VideoWrapper;
