import { useContext, useEffect, useState } from "react";
import Mytoytablerow from "./Mytoytablerow";
import { Authcontext } from "../../../provider/Authprovider";
import { useNavigation } from "react-router-dom";

const Mytoy = () => {
  const { user } = useContext(Authcontext);
  // console.log(user.email);
  const navigation = useNavigation();
  console.log(navigation.state);
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

  return (
    <div className="w-10/12 mx-auto my-10">
      {/* loading animation  */}
      <div>
        {navigation.state === "loading" ? (
          <div className="flex justify-center items-center min-h-screen">
            <div className="w-10 h-10 border-b-8 border-r-4 rounded-full animate-spin dark:border-amber-700"></div>
            <p className="font-bold text-xl text-amber-700 ms-2">Loading....</p>
          </div>
        ) : (
          ""
        )}
      </div>
      {/* loading animation  */}

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
        <h1 className="text-red-700 text-center font-semibold text-lg mt-5">
          {noDataMessage}
        </h1>
      </div>
    </div>
  );
};

export default Mytoy;
