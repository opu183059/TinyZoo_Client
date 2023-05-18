const Gallery = () => {
  return (
    <div className="w-10/12 mx-auto my-10">
      <div className="grid gap-4">
        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <img
              className="h-auto w-full rounded-lg"
              src="https://i.ibb.co/YkWyzJs/g1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto w-full rounded-lg"
              src="https://i.ibb.co/rFcYQkq/g1-2.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/m9kHBxK/g7.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/SJf9bNb/g5-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/crpwV9m/g4-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/L63dqCw/g6-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg hidden md:block"
              src="https://i.ibb.co/XXT034S/g2-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
