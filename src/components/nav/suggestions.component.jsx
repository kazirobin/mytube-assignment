
const Suggestions = ({ handleVideoMedia, videoList, handleSuggestion }) => {
  return (
    <ul
      className="bg-black"
      onClick={() => {
        handleSuggestion(false);
      }}
    >
      {/* Suggestions */}
      {videoList.map((video, index) => {
        return (
          <li key={index}>
            <h1
              className="border p-1 m-2 hover:border-red-600 cursor-pointer"
              onClick={() => {
                handleVideoMedia(video);
              }}
            >
              {video.snippet.title}
            </h1>
          </li>
        );
      })}
    </ul>
  );
};

export default Suggestions;
