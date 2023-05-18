import { useEffect, useState } from "react";
import Singletoyrow from "./Singletoyrow";

const Alltoy = () => {
  const [toys, setToys] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/allToy")
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
        // console.log(result);
      });
  }, []);
  return (
    <div className="w-10/12 mx-auto my-10">
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Available</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {toys?.map((toy) => (
              <Singletoyrow toy={toy} key={toy._id}></Singletoyrow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alltoy;
