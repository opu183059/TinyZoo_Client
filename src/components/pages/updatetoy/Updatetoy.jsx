import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";

import CreatableSelect from "react-select/creatable";
import Swal from "sweetalert2";

const Updatetoy = () => {
  const toys = useLoaderData();
  const {
    sellerName,
    toyname,
    sellerEmail,
    Rating,
    photoURL,
    description,
    Price,
    Available,
    _id,
  } = toys || {};

  // ----------------------------------

  const [selectedOption, setSelectedOption] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.subCategory = selectedOption;
    fetch(`http://localhost:5000/toyupdate/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Data Updated successfully",
          });
        }
      });
    console.log(data);
  };

  const options = [
    { value: "teddy bear", label: "teddy bear" },
    { value: "horse", label: "horse" },
    { value: "dianoasur", label: "dianoasur" },
    { value: "dogs", label: "dogs" },
    { value: "lion", label: "lion" },
    { value: "cats", label: "cats" },
    { value: "unicorn", label: "unicorn" },
    { value: "cow", label: "cow" },
  ];

  return (
    <div>
      <section className="p-6 dark:text-gray-50">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <fieldset className=" w-10/12 md:8/12 lg:7/12 mx-auto p-6 rounded-md shadow-sm dark:bg-gray-900">
            {errors.exampleRequired && <span>This field is required</span>}
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full">
                <h1>Update Toy: {toyname}</h1>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Toy name
                </label>
                <input
                  defaultValue={toyname}
                  {...register("toyname")}
                  id="toyname"
                  type="text"
                  placeholder="Toy name"
                  className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="subCatagory" className="text-sm">
                  Sub-Catagory
                </label>
                {/* <input {...register("exampleRequired", { required: true })} />

                {errors.exampleRequired && <span>This field is required</span>} */}
                <CreatableSelect
                  className="h-9 w-full dark:border-gray-700 dark:text-gray-900"
                  defaultValue={selectedOption}
                  required
                  onChange={setSelectedOption}
                  options={options}
                  isMulti
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="sellerName" className="text-sm">
                  Seller Name
                </label>
                <input
                  defaultValue={sellerName}
                  {...register("sellerName")}
                  id="sellerName"
                  type="text"
                  placeholder="Seller Name"
                  className="w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="sellerEmail" className="text-sm">
                  Seller Email
                </label>
                <input
                  defaultValue={sellerEmail}
                  {...register("sellerEmail")}
                  id="sellerEmail"
                  type="email"
                  placeholder="Seller Email "
                  className="w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              {/* <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Gender
                </label>
                <select
                  {...register("gender")}
                  className="h-9 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                >
                  <option value="female">female</option>
                  <option value="male">male</option>
                  <option value="other">other</option>
                </select>
              </div> */}
              <div className="col-span-full">
                <label htmlFor="photoURL" className="text-sm">
                  Photo URL
                </label>
                <input
                  defaultValue={photoURL}
                  {...register("photoURL")}
                  id="photoURL"
                  type="text"
                  placeholder=""
                  className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>

              <div className="col-span-full sm:col-span-2">
                <label htmlFor="Price" className="text-sm">
                  Price
                </label>
                <input
                  defaultValue={Price}
                  {...register("Price")}
                  id="Price"
                  type="text"
                  placeholder=""
                  className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="Rating" className="text-sm">
                  Rating
                </label>
                <input
                  defaultValue={Rating}
                  {...register("Rating")}
                  id="Rating"
                  type="text"
                  placeholder=""
                  className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="Available" className="text-sm">
                  Available
                </label>
                <input
                  defaultValue={Available}
                  {...register("Available")}
                  id="Available"
                  type="text"
                  placeholder=""
                  className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="description" className="text-sm">
                  Description
                </label>
                {/* <textarea className="textarea" placeholder="Details"></textarea> */}
                <textarea
                  defaultValue={description}
                  {...register("description")}
                  id="description"
                  type="text"
                  placeholder="description"
                  className="textarea w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
            </div>
          </fieldset>
          <div className="w-full text-center">
            <input type="submit" className="btn btn-primary" value="update" />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Updatetoy;
