// eslint-disable-next-line react/prop-types
const Mytoytablerow = ({ mytoy }) => {
  const { sellerName, toyname, subCategory, Price, Available } = mytoy || {};
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
          <button className="btn btn-ghost btn-xs">details</button>
        </td>
      </tr>
    </>
  );
};

export default Mytoytablerow;
