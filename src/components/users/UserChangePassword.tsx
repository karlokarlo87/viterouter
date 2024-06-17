import { useState } from "react";
import UserPassValidation from "../../validators/UserPassValidation";
import SuccessMessage from "../messagebox/SuccessMessage";
const UserChangePassword = ({ onSubmit, isSuccess, setIsFormSuccess }) => {
  const [password, setPassword] = useState({
    password: "",
    repeatpassword: "",
    passwort_update: Date.now(),
  });

  const [errors, setError] = useState({
    password: "",
    repeatpassword: "",
  });
  const handleChangeInput = (e) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = UserPassValidation(password);
    setError(newErrors);

    if (Object.values(errors).filter(Boolean).length == 0) {
      onSubmit(password);
    }
  };

  return (
    <>
      {isSuccess ? (
        <SuccessMessage setIsFormSuccess={setIsFormSuccess} />
      ) : null}

      <form
        className="space-y-4 md:space-y-6 mt-1 flex justify-left items-end gap-3"
        onSubmit={handleSubmit}
      >
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {errors.password !== "" ? (
              <span style={{ color: "red" }}>{errors.password}</span>
            ) : (
              " User resset password"
            )}
          </label>
          <input
            type="password"
            onChange={handleChangeInput}
            name="password"
            value={password["password"]}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="repeatpassword"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {errors.repeatpassword !== "" ? (
              <span style={{ color: "red" }}>{errors.repeatpassword}</span>
            ) : (
              " Repeate Password"
            )}
          </label>
          <input
            type="password"
            onChange={handleChangeInput}
            name="repeatpassword"
            value={password["repeatpassword"]}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-auto text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Change Password
        </button>
      </form>
    </>
  );
};
export default UserChangePassword;
