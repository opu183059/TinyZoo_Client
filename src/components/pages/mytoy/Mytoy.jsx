import { useEffect, useState } from "react";
import Mytoytablerow from "./Mytoytablerow";

const Mytoy = () => {
  const [myToys, setmyToys] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/mytoy/opu@gmail.com")
      .then((res) => res.json())
      .then((result) => {
        setmyToys(result);
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
            {myToys?.map((mytoy) => (
              <Mytoytablerow mytoy={mytoy} key={mytoy._id}></Mytoytablerow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mytoy;
