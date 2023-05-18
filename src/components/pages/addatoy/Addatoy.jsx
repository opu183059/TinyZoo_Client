import { useState } from "react";
import { useForm } from "react-hook-form";

import CreatableSelect from "react-select/creatable";

const Addatoy = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.subCategory = selectedOption;
    console.log(data);
  };

  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "C++", label: "C++" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" },
    { value: "Node", label: "Node" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Redux", label: "Redux" },
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
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Toy information</p>
              <p className="text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci fuga autem eum!
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Toy name
                </label>
                <input
                  defaultValue="test"
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
                <CreatableSelect
                  className="h-9 w-full dark:border-gray-700 dark:text-gray-900"
                  defaultValue={selectedOption}
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
            <input type="submit" className="btn btn-primary" />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Addatoy;
