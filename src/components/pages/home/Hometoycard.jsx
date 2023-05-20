import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Hometoycard = ({ hometoy }) => {
  const { photoURL, toyname, Price, Rating, _id } = hometoy || {};
  //   console.log(photoURL, toyname, Price, Rating);
  return (
    <div>
      <div className="card card-compact w-auto bg-base-100 shadow-lg hover:shadow-xl">
        <figure>
          <img
            src={photoURL}
            alt={toyname}
            className="max-w-xs h-72 rounded-lg mt-5"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{toyname}</h2>
          <p>{Price}</p>
          <p>{Rating}</p>
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary">View Details</button> */}
            <Link to={`alltoy/toyDetails/${_id}`}>
              <button className="btn btn-ghost btn-xs">details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hometoycard;
