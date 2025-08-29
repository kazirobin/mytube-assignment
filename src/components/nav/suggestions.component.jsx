const Suggestions = ({ handleVideoMedia, videoList, handleSuggestion }) => {
  return (
    <ul
      className="bg-black"
      onClick={() => {
        handleSuggestion(false);
      }}
    >
      
      {videoList.map((video, index) => {
        const { title } = video.snippet;
        return (
          <li key={index}>
            <h1
              className="border p-1 m-2 hover:border-red-600 cursor-pointer"
              onClick={() => {
                handleVideoMedia(video);
              }}
            >
              {title}
            </h1>
          </li>
        );
      })}

    </ul>
  );
};

export default Suggestions;
