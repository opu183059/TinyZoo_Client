import { useState } from "react";

const Availabletoy = () => {
  const [active, setActive] = useState("");
  const handleTabClick = (name) => {
    setActive(name);
  };
  return (
    <div className="text-center">
      <div
        onClick={() => handleTabClick("remote")}
        className={`btn ${active == "remote" ? "bg-indigo-600" : " bg-white"}`}
      >
        Remote
      </div>
      <div
        onClick={() => handleTabClick("onsite")}
        className={`btn btn-primary ${
          active == "onsite" ? "bg-indigo-600" : " bg-white"
        }`}
      >
        Onsite
      </div>
    </div>
  );
};

export default Availabletoy;
