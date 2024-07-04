import { useCreateUser } from "../../services/mutation";
import { UserCreate } from "../../types/UserCreate";
import { SubmitHandler, useForm } from "react-hook-form";
import { Datepicker } from "flowbite-react";
import { EamilFindUser, PhoneFindUser } from "../../services/querises";
import { useEffect, useState } from "react";
import userCreateValidation from "../../validators/userCreateValidation";
const UsersCreate = () => {
  const [emailErrors, setEmailErrors] = useState("");
  const [phoneErrors, setPhoneErrors] = useState("");
  const [errors, setError] = useState({
    id: "",
    name: "",
    lname: "",
    username: "",
    password: "",
    repeatpassword: "",
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
    active: "",
  });
  const [users, setUsers] = useState({
    name: "",
    lname: "",
    email: "",
    username: "",
    birth_date: "",
    phone: "",
    adress: "",
    role: "",
    country_code: "",
    created_at: "",
    image: "",
    last_login: "",
    country_id: "",
    city_id: "",
    facebook: "",
    google: "",
    active: 0,
    password: "",
    repeatpassword: "",
    passwort_update: "",
  });

  const createUserMutation = useCreateUser();

  let createEmailMutation = EamilFindUser(users.email, 0);
  let createPhoneMutation = PhoneFindUser(users.phone, 0);

  useEffect(() => {
    checkEmailError();
  }, [createEmailMutation.data]);
  useEffect(() => {
    checkPhoneError();
  }, [createPhoneMutation.data]);
  useEffect(() => {
    setUsers({
      name: "",
      lname: "",
      email: "",
      username: "",
      birth_date: "",
      phone: "",
      adress: "",
      role: "",
      country_code: "",
      created_at: "",
      image: "",
      last_login: "",
      country_id: "",
      city_id: "",
      facebook: "",
      google: "",
      active: 0,
      password: "",
      repeatpassword: "",
      passwort_update: "",
    });
  }, [createUserMutation.isSuccess]);
  const checkEmailError = () => {
    if (createEmailMutation.isSuccess) {
      if (!createEmailMutation.data) {
        setEmailErrors("email is not unique");
      } else {
        setEmailErrors("");
      }
    }
  };
  const checkPhoneError = () => {
    if (createPhoneMutation.isSuccess) {
      if (!createPhoneMutation.data) {
        setPhoneErrors("Phone is not unique");
      } else {
        setPhoneErrors("");
      }
    }
  };
  const handleChangeInput = (e: any) => {
    e.preventDefault();
    setUsers({
      ...users,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeInputDate = (date: any) => {
    const d = new Date(date).toLocaleDateString("fr-FR");
    console.log(d);
    setUsers({
      ...users,
      ["birth_date"]: d,
    });
  };
  const handleChangeActive = (e: any) => {
    let checked = 0;
    if (e.target.checked) checked = 1;
    setUsers({
      ...users,
      [e.target.name]: checked,
    });
  };
  const handleChangeError = (e: any) => {
    e.preventDefault();
    setError({
      ...errors,
      [e.target.name]: "",
    });
  };
  const handleCheckEmailIn = async (e: any) => {
    e.preventDefault();
    checkEmailError();
  };

  const handleCheckPhone = async (e: any) => {
    e.preventDefault();
    checkPhoneError();
  };
  const handleCreateUserSubmit = async (event: {
    preventDefault: () => void;
  }) => {
    event.preventDefault();
    const newErrors = userCreateValidation(users);
    setError(newErrors);
    console.log(users);
    if (
      Object.values(newErrors).filter(Boolean).length == 0 &&
      emailErrors.length == 0 &&
      phoneErrors.length == 0
    ) {
      await createUserMutation.mutate(users);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Create User
        </h3>
      </div>
      <div className="max-w-lg mx-auto">
        <form onSubmit={handleCreateUserSubmit}>
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
              onFocus={handleChangeError}
              name="name"
              value={users["name"]}
              placeholder="First Name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              onFocus={handleChangeError}
              name="lname"
              value={users["lname"]}
              placeholder="Last Name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
            >
              {errors.email !== "" ? (
                <span style={{ color: "red" }}>{errors.email}</span>
              ) : emailErrors != "" ? (
                <span style={{ color: "red" }}>{emailErrors}</span>
              ) : (
                "email"
              )}
            </label>
            <input
              type="text"
              onChange={handleChangeInput}
              onFocus={handleChangeError}
              onBlur={(e) => handleCheckEmailIn(e)}
              name="email"
              value={users["email"]}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john@company.com"
            />
          </div>
          <div>
            <label
              htmlFor="birth_date"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
            >
              {errors.birth_date !== "" ? (
                <span style={{ color: "red" }}>{errors.birth_date}</span>
              ) : (
                "birthdate"
              )}
            </label>
            <Datepicker
              name="birth_date"
              onSelectedDateChanged={handleChangeInputDate}
              onClick={handleChangeError}
              value={users["birth_date"]}
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
              value={users["phone"]}
              name="phone"
              onChange={handleChangeInput}
              onFocus={handleChangeError}
              onBlur={handleCheckPhone}
              placeholder="phone"
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
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
              onFocus={handleChangeError}
              name="adress"
              value={users["adress"]}
              placeholder="adress"
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            />
          </div>
          <div className="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="country_id"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
              >
                country
              </label>
              <select
                name="country_id"
                onChange={handleChangeInput}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                defaultValue={1}
              >
                <option value={1}>Georgia</option>
                <option value={2}>Italy</option>
                <option value={3}>Spain</option>
                <option value={4}>USA</option>
                <option value={5}>Germany</option>
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
                name="city_id"
                onChange={handleChangeInput}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                defaultValue={1}
              >
                <option value={1}>tbilisi</option>
                <option value={2}>batumi</option>
                <option value={3}>kutaisi</option>
                <option value={4}>rustavi</option>
                <option value={5}>telavi</option>
              </select>
            </div>
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
              onFocus={handleChangeError}
              name="role"
              value={users["role"]}
              placeholder="role"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            />

            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
              Identification
            </h3>
            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="vue-checkbox-list"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="vue-checkbox-list"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Vue JS
                  </label>
                </div>
              </li>
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="react-checkbox-list"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="react-checkbox-list"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    React
                  </label>
                </div>
              </li>
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="angular-checkbox-list"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="angular-checkbox-list"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Angular
                  </label>
                </div>
              </li>
              <li className="w-full dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="laravel-checkbox-list"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="laravel-checkbox-list"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Laravel
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
            >
              {errors.password !== "" ? (
                <span style={{ color: "red" }}>{errors.password}</span>
              ) : (
                "password"
              )}
            </label>
            <input
              type="text"
              onChange={handleChangeInput}
              onFocus={handleChangeError}
              value={users["password"]}
              name="password"
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              placeholder="password"
            />
          </div>
          <div>
            <label
              htmlFor="repeatpassword"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
            >
              {errors.repeatpassword !== "" ? (
                <span style={{ color: "red" }}>{errors.repeatpassword}</span>
              ) : (
                "repeatpassword"
              )}
            </label>

            <input
              type="text"
              onChange={handleChangeInput}
              onFocus={handleChangeError}
              value={users["repeatpassword"]}
              name="repeatpassword"
              className="mb-4 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              placeholder="repeatpassword"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="active"
                  className="sr-only peer"
                  onChange={handleChangeActive}
                  onFocus={handleChangeError}
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
          <div className="flex items-center space-x-4">
            <button
              type="submit"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Create User
            </button>
            <button
              type="button"
              className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            >
              Abort
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default UsersCreate;
