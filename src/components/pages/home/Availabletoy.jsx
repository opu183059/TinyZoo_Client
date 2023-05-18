import { useEffect, useState } from "react";
import Hometoycard from "./Hometoycard";

const Availabletoy = () => {
  const [active, setActive] = useState("");
  const [homeToys, setHomeToys] = useState();
  const handleTabClick = (name) => {
    setActive(name);
  };

  useEffect(() => {
    fetch("http://localhost:5000/allToy")
      .then((res) => res.json())
      .then((result) => {
        setHomeToys(result);
        console.log(result);
      });
  }, []);

  return (
    <div className="my-10 text-center">
      <h1>Shop by Category</h1>

      <div>
        <div
          onClick={() => handleTabClick("cats")}
          className={`tab tab-bordered text-lg ${
            active == "cats" ? "tab-active font-semibold" : " "
          }`}
        >
          Cats
        </div>
        <div
          onClick={() => handleTabClick("lions")}
          className={`tab tab-bordered text-lg ${
            active == "lions" ? "tab-active font-semibold" : " "
          }`}
        >
          Lions
        </div>
        <div
          onClick={() => handleTabClick("dianoasur")}
          className={`tab tab-bordered text-lg ${
            active == "dianoasur" ? "tab-active font-semibold" : " "
          }`}
        >
          Dianoasur
        </div>
      </div>
      {/* category end  */}
      <div className="category w-10/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {homeToys?.map((hometoy) => (
            <Hometoycard hometoy={hometoy} key={hometoy._id}></Hometoycard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Availabletoy;
