/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../../provider/Authprovider";

const Privateroute = ({ children }) => {
  const location = useLocation();
  // console.log(location);
  const { user, loading } = useContext(Authcontext);
  if (loading) {
    return <progress className="progress w-full"></progress>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login"></Navigate>;
};

export default Privateroute;
