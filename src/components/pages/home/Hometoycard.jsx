// eslint-disable-next-line react/prop-types
const Hometoycard = ({ hometoy }) => {
  const { photoURL, toyname, Price, Rating } = hometoy || {};
  //   console.log(photoURL, toyname, Price, Rating);
  return (
    <div>
      <div className="card card-compact w-auto bg-base-100 shadow-lg hover:shadow-xl">
        <figure>
          <img
            src={photoURL}
            alt={toyname}
            className="max-w-xs rounded-lg mt-5"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{toyname}</h2>
          <p>{Price}</p>
          <p>{Rating}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hometoycard;
