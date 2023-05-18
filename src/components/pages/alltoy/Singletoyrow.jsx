const Singletoyrow = ({ toy }) => {
  const { sellerName, Available, subCategory, toyname, Price } = toy || {};
  console.log(subCategory[0].value);
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

export default Singletoyrow;
