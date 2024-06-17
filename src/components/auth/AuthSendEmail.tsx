import { ChangeEvent, useState } from "react";

import { useSendMail } from "../../services/mutation";

import { useNavigate } from "react-router-dom";

const AuthSendEmail = () => {
  const createUserMutation = useSendMail();
  const [emailSend, setemailSend] = useState("");
  const navigate = useNavigate();
  const handelSubmit = (e: any) => {
    e.preventDefault();
    createUserMutation.mutate(emailSend);
    if (createUserMutation.isIdle) {
      navigate("/auth/EmailSuccsess");
    }
  };
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setemailSend(e.target.value);
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
                Send Email For Resset Password
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={(e) => handelSubmit(e)}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => handleChangeInput(e)}
                  />
                </div>

                <button
                  type="submit"
                  className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Send Email
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AuthSendEmail;
