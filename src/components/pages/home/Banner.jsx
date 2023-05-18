const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-[url('https://media.istockphoto.com/id/1096992806/photo/colorful-kids-toys-frame-on-wooden-background-top-view-flat-lay-copy-space-for-text.jpg?s=170667a&w=0&k=20&c=Sjg9sbhAp4wJ7O03ykwZyV2lVG309kwlDS5QYn7g6RQ=')] bg-cover bg-fixed">
        <div className="hero-content flex-col lg:flex-row-reverse w-10/12 mx-auto">
          <img
            src="https://i.ibb.co/YhPm11D/banner.jpg"
            className="rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-2xl  text-stone-400 font-akaya">welcome to</h1>
            <h1 className="text-7xl text-indigo-900 font-akaya drop-shadow-[0_35px_35px_rgba(255, 255, 255)]">
              TinyZoo
            </h1>
            <p className="py-6 text-stone-800">
              Discover a world of adorable toy animals at our online store. From
              cuddly cows to playful cats and majestic lions, we offer a wide
              selection of high-quality companions. Let your imagination roam
              with lifelike designs and detailed craftsmanship. Find your
              perfect furry friend and experience the joy of imaginative play.
              Start your journey with us today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
