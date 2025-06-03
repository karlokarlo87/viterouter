import { useEffect, useState } from "react";
import UserPassValidation from "../../validators/UserPassValidation";
import Succsess from "../../messages/success";
import { useUpdatePassword } from "../../services/user/mutation";

const UserChangePassword = () => {
  const [isFormSuccess, setIsFormSuccess] = useState(false);
  const createUserMutation = useUpdatePassword();
  const tocken = localStorage.getItem("token") || undefined;

  const [password, setPassword] = useState({
    password: "",
    repeatpassword: "",
    passwort_update: Date.now().toString(),
    tocken: tocken,
  });

  const [errors, setError] = useState({
    password: "",
    repeatpassword: "",
  });
  const handleChangeInput = (e: { target: { name: any; value: any } }) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitChangePassword = async (event: {
    preventDefault: () => void;
  }) => {
    event.preventDefault();
    const newErrors = await UserPassValidation(password);

    setError(newErrors);

    if (
      (await Object.values(errors).filter(Boolean).length) == 0 &&
      password.password != "" &&
      password.repeatpassword != ""
    ) {
      createUserMutation.mutate(password);
    }
  };
  useEffect(() => {
    if (createUserMutation.isSuccess) setIsFormSuccess(true);
    setPassword({
      ...password,
      password: "",
      repeatpassword: "",
    });
  }, [createUserMutation.isSuccess]);
  return (
    <>
      {isFormSuccess ? (
        <Succsess
          setIsFormSuccess={setIsFormSuccess}
          text={"პაროლი წარმატებით განახლდა"}
        />
      ) : (
        ""
      )}
      <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 ">
        <div className="max-w-xl mx-auto bg-white p-5">
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600 ">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white  font-['custom-1']">
              პაროლის განახლება
            </h1>
          </div>
          <form
            onSubmit={handleSubmitChangePassword}
            className="font-['custom-4']"
          >
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                {errors.password !== "" ? (
                  <span style={{ color: "red" }}>{errors.password}</span>
                ) : (
                  " ახალი პაროლი"
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
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4"
              >
                {errors.repeatpassword !== "" ? (
                  <span style={{ color: "red" }}>{errors.repeatpassword}</span>
                ) : (
                  "გაიმეორე პაროლი"
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
              className="mt-4 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              პაროლის შეცვლა
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
export default UserChangePassword;
