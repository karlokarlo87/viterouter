import { useEffect, useState } from "react";
import { useAuthUser } from "../../services/mutation";
import { Auth } from "../../types/Auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

const AuthLogin = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [isDeactivate, setIsDeactivate] = useState(false);
  const createUserMutation = useAuthUser();

  const { handleSubmit, register } = useForm<Auth>();
  const handleCreateUserSubmit: SubmitHandler<Auth> = async (
    data: Auth,
    event
  ) => {
    event.preventDefault();
    createUserMutation.mutate(data);
  };
  useEffect(() => {
    if (createUserMutation.data?.data.status == 401) {
      setIsLogin(true);
    } else if (createUserMutation.data?.data.status == "deactivate") {
      setIsDeactivate(true);
    } else if (createUserMutation.isSuccess) {
      navigate("/dashboard", { replace: true });
    }
  }, [createUserMutation.isSuccess]);
  const handleOnFocus = () => {
    setIsLogin(false);
    setIsDeactivate(false);
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Flowbite
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(handleCreateUserSubmit)}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {isLogin ? (
                      <span style={{ color: "red" }}>
                        Email Or Password is incorect !
                      </span>
                    ) : isDeactivate ? (
                      <span style={{ color: "red" }}>
                        Your Acount Is Deactivate !
                      </span>
                    ) : (
                      " Your email"
                    )}
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    {...register("username")}
                    onFocus={handleOnFocus}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {isLogin || isDeactivate ? (
                      <span style={{ color: "red" }}>Password</span>
                    ) : (
                      " Password"
                    )}
                  </label>
                  <input
                    type="password"
                    id="password"
                    {...register("password")}
                    onFocus={handleOnFocus}
                    placeholder="••••••••"
                    required
                    autoComplete="off"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  password resset link{" "}
                  <Link
                    to="/auth/sendemail"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AuthLogin;
