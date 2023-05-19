import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const Mytoytablerow = ({ mytoy }) => {
  const { sellerName, toyname, subCategory, Price, Available, _id } =
    mytoy || {};

  const dlt = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toydelete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <>
      <tr>
        <td></td>
        <td>{sellerName}</td>
        <td>{toyname}</td>
        <td>{subCategory[0].value}</td>
        <td>{Price}</td>
        <td>{Available}</td>
        <td>
          <button className="btn btn-ghost btn-xs">View</button>
          <button className="btn btn-ghost btn-xs">Edit</button>
          <button onClick={() => dlt(_id)} className="btn btn-ghost btn-xs">
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default Mytoytablerow;
