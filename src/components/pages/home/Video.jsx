const Video = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-10/12 mx-auto gap-10">
      <div>
        <iframe
          className="w-80 h-60 aspect-square rounded-xl"
          src="https://www.youtube.com/embed/fznL8aAFIQw"
        ></iframe>
      </div>
      <div>
        <iframe
          className="w-80 h-60 aspect-square rounded-xl"
          src="https://www.youtube.com/embed/qIq92ZO7ERo"
        ></iframe>
      </div>
      <div>
        <iframe
          className="w-80 h-60 aspect-square rounded-xl"
          src="https://www.youtube.com/embed/XW-RlWvrds4"
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
