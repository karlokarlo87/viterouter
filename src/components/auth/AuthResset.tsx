import { useUpdatePassword } from "../../services/mutation";
import { Resset } from "../../types/Resset";

import { useParams } from "react-router-dom";
import { cheskstatus } from "../../services/querises";
import AuthChangePassword from "./AuthChangePassword";
import AuthTockenError from "./AuthTockenError";
import AuthSuccess from "./AuthSuccess";

const AuthResset = () => {
  const createUserMutation = useUpdatePassword();
  const { tocken } = useParams();
  const handleSubmit = (data: Resset) => {
    const newData = { tocken, ...data };
    createUserMutation.mutate(newData);
  };
  let loginHtml;
  if (tocken == "error") {
    loginHtml = <AuthTockenError />;
  } else if (tocken == "succsess") {
    loginHtml = <AuthSuccess />;
  } else {
    const checkAuthstatus = cheskstatus(`${tocken}`);
    if (checkAuthstatus.isSuccess) {
      loginHtml = <AuthChangePassword onSubmit={handleSubmit} />;
    }
    if (createUserMutation.isSuccess) {
      loginHtml = <AuthSuccess />;
    } else if (createUserMutation.isError) {
      loginHtml = <AuthTockenError />;
    }
  }

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
              {loginHtml}
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
                &nbsp; or &nbsp;
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Log In
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AuthResset;
