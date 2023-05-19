import { useEffect, useState } from "react";
import Singletoyrow from "./Singletoyrow";

const Alltoy = () => {
  const [toys, setToys] = useState();
  const [search, setSearch] = useState();
  const [noDataMessage, setNoDataMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/allToy")
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
        // console.log(result);
        if (result.length == 0) {
          setNoDataMessage("No data found, Please try again");
        } else {
          setNoDataMessage(" ");
        }
      });
  }, []);
  const handleSearch = () => {
    fetch(`http://localhost:5000/toysearch/${search}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        // console.log(data);
        if (data.length == 0) {
          setNoDataMessage("No data found, Please try again");
        } else {
          setNoDataMessage(" ");
        }
      });
  };

  return (
    <div className="w-10/12 mx-auto my-10">
      <div className="overflow-x-auto">
        <div className="search-box p-2 text-center">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="h-9 ps-3 border-2 border-indigo-950 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
          />
          <button onClick={handleSearch}>Search</button>
        </div>
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
        <h1 className="text-red-700 text-center font-semibold text-lg mt-5">
          {noDataMessage}
        </h1>
      </div>
    </div>
  );
};

export default Alltoy;
