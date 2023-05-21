import { useContext, useEffect, useState } from "react";
import Mytoytablerow from "./Mytoytablerow";
import { Authcontext } from "../../../provider/Authprovider";
import Pagetitle from "../../common/Pagetitle";

const Mytoy = () => {
  const { user, loading } = useContext(Authcontext);
  const [myToys, setmyToys] = useState();
  const [noDataMessage, setNoDataMessage] = useState("");

  useEffect(() => {
    fetch(`https://tinyzoo-server.vercel.app/mytoy/${user?.email}`)
      .then((res) => res.json())
      .then((result) => {
        setmyToys(result);
        if (result.length == 0) {
          setNoDataMessage("No data found, Please try again");
        } else {
          setNoDataMessage(" ");
        }
      });
  }, []);

  // let newdata = myToys;
  // console.log("Before", newdata);
  // newdata?.sort((a, b) => parseInt(b.Price) - parseInt(a.Price));
  // console.log(newdata);

  return (
    <div className="w-10/12 mx-auto pt-24 mb-10">
      <Pagetitle title="ToyZoo | MyToy"></Pagetitle>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full shadow-lg">
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
              <Mytoytablerow
                mytoy={mytoy}
                key={mytoy._id}
                myToys={myToys}
                setmyToys={setmyToys}
              ></Mytoytablerow>
            ))}
          </tbody>
        </table>
        {/* loading animation  */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-10 h-10 border-b-8 border-r-4 rounded-full animate-spin dark:border-amber-700"></div>
            <p className="font-bold text-xl text-amber-700 ms-2">Loading....</p>
          </div>
        ) : (
          ""
        )}
        {/* loading animation  */}
        <h1 className="text-red-700 text-center font-semibold text-lg mt-5">
          {noDataMessage}
        </h1>
      </div>
    </div>
  );
};

export default Mytoy;
