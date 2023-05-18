const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-[url('https://i.ibb.co/PhHd1Rt/banerfinal.jpg')] bg-cover bg-fixed">
        <div className="hero-content flex-col lg:flex-row-reverse w-10/12 mx-auto">
          {/* <img
            src="https://i.ibb.co/YhPm11D/banner.jpg"
            className="rounded-lg shadow-2xl"
          /> */}
          <div className="lg:w-1/2 w-0"></div>
          <div className="text-center md:text-left lg:w-1/2 w-full">
            <div className="flex">
              <div className="hidden md:block items-center justify-center w-16 h-16 p-1 rounded-full dark:bg-white">
                <img src="https://i.ibb.co/hghyqpM/TinyZoo3.png" alt="" />
              </div>
              <h1 className="text-7xl ms-3 text-indigo-100 font-akaya drop-shadow-[0_35px_35px_rgba(255, 255, 255)]">
                TinyZoo
              </h1>
            </div>
            <p className="py-6 text-indigo-100">
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
