import { FiUpload } from "react-icons/fi";
// import { HiQuestionMarkCircle } from "react-icons/hi";
// import { Button, Tooltip } from "flowbite-react";
// import { RiDeleteBin5Line } from "react-icons/ri";
import { useState } from "react";
import UserValidation from "../../validators/UserValidation";

import { EamilFindUser, PhoneFindUser } from "../../services/querises";
import UserFormInput from "./UserFormInputs";
import { tokenDecode } from "../../functions/tokenDecode";
const UserForm = ({ onSubmit, initialValue, createUserMutation }) => {
  const [emailErrors, setEmailErrors] = useState("");
  const [phoneErrors, setPhoneErrors] = useState("");
  const [fileImage, setFileImage] = useState("");
  const tocken = localStorage.getItem("token");
  const payload = tokenDecode(tocken);
  const [errors, setError] = useState({
    id: "",
    name: "",
    lname: "",
    username: "",
    // password: "",
    //  repeatpassword: "",
    role: "",
    email: "",
    adress: "",
    birth_date: "",
    country_code: "",
    phone: "",
    created_at: "",
    image: "",
    last_login: "",
    country_id: "",
    city_id: "",
    facebook: "",
    google: "",
  });

  function handleChange(e: any) {
    const fr = new FileReader();
    fr.readAsArrayBuffer(e.target.files[0]);
    fr.onload = function () {
      const blob = new Blob([fr.result]);
      const image = URL.createObjectURL(blob);
      setFileImage(image);
    };
    setUsers({ ...users, ["file"]: e.target.files[0] });
  }

  const [users, setUsers] = useState({
    id: initialValue.id || "",
    file: undefined,
    name: initialValue.name || "",
    lname: initialValue.lname || "",
    email: initialValue.email || "",
    username: initialValue.username || "",
    birth_date: initialValue.birth_date || "",
    phone: initialValue.phone || "",
    adress: initialValue.adress || "",
    //  password: initialValue.password || "",
    // repeatpassword: initialValue.repeatpassword || "",
    role: initialValue.role || "",
    country_code: "",
    created_at: "",
    image: initialValue.image || "",
    last_login: "",
    country_id: initialValue.country_id || "",
    city_id: "",
    facebook: "",
    google: "",
    active: initialValue.active || 0,
  });

  let createEmailMutation = EamilFindUser(users.email, initialValue.id);
  let createPhoneMutation = PhoneFindUser(users.phone, initialValue.id);

  const handleChangeInput = (e: any) => {
    e.preventDefault();

    setUsers({
      ...users,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newErrors = UserValidation(users);
    setError(newErrors);

    if (
      Object.values(newErrors).filter(Boolean).length == 0 &&
      emailErrors.length == 0 &&
      phoneErrors.length == 0
    ) {
      onSubmit(users);
    }
  };
  const handleChangeActive = (e: any) => {
    let checked = 0;
    if (e.target.checked) checked = 1;
    setUsers({
      ...users,
      [e.target.name]: checked,
    });
  };
  const handleCheckEmail = async () => {
    if (createEmailMutation.isSuccess) {
      if (!createEmailMutation.data) {
        setEmailErrors("email is not unique");
      } else {
        setEmailErrors("");
      }
    }
  };

  const handleCheckPhone = async () => {
    if (createPhoneMutation.isSuccess) {
      if (!createPhoneMutation.data) {
        setPhoneErrors("Phone is not unique");
      } else {
        setPhoneErrors("");
      }
    }
  };
  let isupdated = createUserMutation.isPending;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <img
          className="w-20 h-20 rounded-full"
          src={
            fileImage == ""
              ? "http://localhost:3000/asset/upload/" + users["image"]
              : fileImage
          }
          alt="Helene avatar"
        />
        <div className="">
          <label
            className="text-xl block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="user_avatar"
          >
            Upload file
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            id="file"
            type="file"
            onChange={handleChange}
          />
          <div
            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="user_avatar_help"
          >
            SVG, PNG, JPG or GIF (MAX. 800x400px).
          </div>

          <div className="">
            <button
              type="button"
              className="text-white relative bg-blue-700 hover:bg-blue-800 pl-7 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <FiUpload className="w-4 h-4 me-2 absolute left-2 " />
              Upload new picture
            </button>
            <button
              type="button"
              className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Delete
            </button>
          </div>
        </div>
        <input type="hidden" name="id" value={users["id"]} />
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
          >
            {errors.name !== "" ? (
              <span style={{ color: "red" }}>{errors.name}</span>
            ) : (
              "First Name"
            )}
          </label>
          <input
            type="text"
            onChange={handleChangeInput}
            name="name"
            value={users["name"]}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="First Name"
          />
        </div>
        <div>
          <label
            htmlFor="lname"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
          >
            {errors.lname !== "" ? (
              <span style={{ color: "red" }}>{errors.lname}</span>
            ) : (
              " Last Name"
            )}
          </label>
          <input
            type="text"
            onChange={handleChangeInput}
            name="lname"
            value={users["lname"]}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Doe"
          />
        </div>
        <UserFormInput
          errors={errors}
          handleChangeInput={(e) => handleChangeInput(e)}
          emailvalue={users["email"]}
          users={users}
          handleCheckEmail={handleCheckEmail}
          emailErrors={emailErrors}
        />
        <div>
          <label
            htmlFor="birth_date"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
          >
            {errors.birth_date !== "" ? (
              <span style={{ color: "red" }}>{errors.birth_date}</span>
            ) : (
              " Birth Date "
            )}
          </label>
          <input
            type="text"
            onChange={handleChangeInput}
            name="birth_date"
            value={users["birth_date"]}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="birth date"
          />
        </div>
        <div>
          <label
            htmlFor="Phone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
          >
            {errors.phone !== "" ? (
              <span style={{ color: "red" }}>{errors.phone}</span>
            ) : phoneErrors != "" ? (
              <span style={{ color: "red" }}>{phoneErrors}</span>
            ) : (
              "Phone"
            )}
          </label>
          <input
            type="text"
            onChange={handleChangeInput}
            name="phone"
            value={users["phone"]}
            onBlur={handleCheckPhone}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="phone"
          />
        </div>
        <div>
          <label
            htmlFor="adress"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
          >
            {errors.adress !== "" ? (
              <span style={{ color: "red" }}>{errors.adress}</span>
            ) : (
              "adress"
            )}
          </label>
          <input
            type="text"
            onChange={handleChangeInput}
            name="adress"
            value={users["adress"]}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="adress"
          />
        </div>

        <div className="grid gap-4 mb-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="country"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
            >
              Country
            </label>
            <select
              id="country"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="1">Australia</option>
              <option value="2">United Kingdom</option>
              <option value="3">Italy</option>
              <option value="4">Germany</option>
              <option value="5">Spain</option>
              <option value="6">France</option>
              <option value="7">Canada</option>
              <option value="8">United States</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="city_id"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
            >
              city
            </label>
            <select
              // {...register("city_id")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              <option>tbilisi</option>
              <option>batumi</option>
              <option>kutaisi</option>
              <option>rustavi</option>
              <option>telavi</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="role"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
            >
              {errors.role !== "" ? (
                <span style={{ color: "red" }}>{errors.role}</span>
              ) : (
                "role"
              )}
            </label>

            <input
              type="text"
              onChange={handleChangeInput}
              name="role"
              value={users["role"]}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="role"
            />
          </div>
        </div>
        {payload.id != users.id ? (
          <div className="flex items-center justify-between">
            <div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="active"
                  className="sr-only peer"
                  onChange={handleChangeActive}
                  value={users["active"]}
                  defaultChecked={users["active"] == 1 ? true : false}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Active User
                </span>
              </label>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="flex items-center space-x-4">
          {isupdated ? (
            <button
              disabled
              type="submit"
              className="text-white bg-slate-300 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-slate-300 dark:focus:ring-primary-800"
            >
              Create User
            </button>
          ) : (
            <button
              type="submit"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Create User
            </button>
          )}

          <button
            type="button"
            className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            Abort
          </button>
        </div>
      </form>
    </>
  );
};

export default UserForm;
