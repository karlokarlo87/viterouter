import { RiLockPasswordLine } from "react-icons/ri";
import { useUserById } from "../../services/querises";
import { useParams, Link } from "react-router-dom";
import UserOrders from "./UserOrder";
import UserChangePassword from "./UserChangePassword";
import { useUpdatePassword } from "../../services/mutation";
import { Resset } from "../../types/Resset";
import { useEffect, useState } from "react";
import { tokenDecode } from "../../functions/tokenDecode";
const UsersView = () => {
  const { id } = useParams();

  let usersIdsQuery = useQueryIn(`${id}`);

  const [isFormSuccess, setIsFormSuccess] = useState(false);

  const createUserMutation = useUpdatePassword();
  const tocken = localStorage.getItem("token");
  const payload = tokenDecode(tocken);

  const handleSubmitChangePassword = (data: Resset) => {
    const newData = { tocken, ...data };

    createUserMutation.mutate(newData);
  };
  const changePasswordModule = (e) => {
    e.preventDefault();
    setIsFormSuccess(!isFormSuccess);
  };
  const isSuccess = createUserMutation.isSuccess;
  useEffect(() => {
    isFormSuccess ? setIsFormSuccess(isSuccess) : null;
    isFormSuccess
      ? localStorage.setItem("token", createUserMutation.data.data.token)
      : null;
  }, [isSuccess]);

  if (usersIdsQuery.isPending) {
    return <span>...Loading</span>;
  }

  if (usersIdsQuery.isError) {
    return <span>Error Loading !</span>;
  }

  return (
    <>
      <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Update view
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mx-auto max-w-screen-xl mt-5 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-4">
                User Details
              </th>
              <th scope="col" className="px-4 py-3">
                Email Adress
              </th>
              <th scope="col" className="px-4 py-3">
                Phone Number
              </th>

              <th scope="col" className="px-4 py-3 text-center">
                Social Network
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex flex-col">
                  <div className="flex items-center mr-1">
                    <img
                      className="  w-20 h-20 rounded-full"
                      src={
                        "http://localhost:3000/asset/upload/" +
                        usersIdsQuery.data.image
                      }
                    />
                    <div className="ml-4">
                      <h2 className="text-4xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white">
                        {usersIdsQuery.data.name} {usersIdsQuery.data.lname}
                      </h2>

                      <span className="bg-primary-100 text-primary-800 mt-1 text-xs leading-4 font-medium inline-flex items-center pl-1 pr-1 pb-1 pt-1 pb-1 pt-41 rounded dark:bg-primary-200 dark:text-primary-800 mb-1">
                        <svg
                          className="mr-1 w-3 h-3"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        {usersIdsQuery.data.role}
                      </span>
                      <div className="text-gray-900 items-center flex mt-1 ">
                        <div className="text-gray-500 w-4 h-4 mr-1 block align-middle">
                          <svg
                            className="text-gray-500 w-4 h-4 mr-1 block align-middle"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <span className="leading-none font-semibold font-light text-gray-500 text-normal   ">
                          Tbilisi, {usersIdsQuery.data.adress}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </th>
              <td className="px-4 py-3 text-left">
                <div className="mb-5 text-gray-600 font-light">
                  {usersIdsQuery.data.email}
                </div>
              </td>
              <td className="px-4 py-3 text-left">
                <div className="mb-5 text-gray-600 font-light">
                  {usersIdsQuery.data.phone}
                </div>
              </td>

              <td className="px-4 py-3 text-center">
                <div className="mb-5 items-center inline-flex">
                  <a
                    href="#"
                    data-tooltip-target="tooltip-facebook"
                    className="text-gray-600 p-2 rounded-lg no-underline hover:text-gray-900 hover:bg-gray-200"
                  >
                    <svg
                      className="w-5 h-5 block align-middle"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>

                  <a
                    href="#"
                    data-tooltip-target="tooltip-facebook"
                    className="text-gray-600 p-2 rounded-lg no-underline hover:text-gray-900 hover:bg-gray-200"
                  >
                    <svg
                      className="w-5 h-5 block align-middle"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>

                  <a
                    href="#"
                    data-tooltip-target="tooltip-github"
                    className="text-gray-600 p-2 rounded-lg no-underline hover:text-gray-900 hover:bg-gray-200"
                  >
                    <svg
                      className="w-5 h-5 block align-middle"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>

                  <a
                    href="#"
                    data-tooltip-target="tooltip-dribbble"
                    className="text-gray-600 p-2 rounded-lg no-underline hover:text-gray-900 hover:bg-gray-200"
                  >
                    <svg
                      className="w-5 h-5 block align-middle"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="pr-4 items-center flex mt-5">
                  <Link
                    type="button"
                    className="whitespace-nowrap bg-blue-700 text-white font-medium text-sm leading-5 text-center pl-5 pr-5 pb-2 pt-2 rounded-lg items-center inline-flex cursor-pointer hover:bg-blue-800"
                    to={"/users/" + id}
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 -ml-1 mr-1 block align-middle"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                      <path
                        fillRule="evenodd"
                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Edit
                  </Link>

                  {usersIdsQuery.data.role.includes("admin") &&
                  payload.id === id ? (
                    <button
                      onClick={changePasswordModule}
                      type="button"
                      className="whitespace-nowrap text-white relative bg-gray-500 hover:bg-gray-600 pl-7 font-medium rounded-lg text-sm pl-5 pr-5 pb-2 pt-2 ml-3  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      <RiLockPasswordLine className="w-4 h-4 me-2 absolute left-2 " />
                      Password Change
                    </button>
                  ) : (
                    ""
                  )}
                  <button
                    type="button"
                    className="whitespace-nowrap bg-red-700 text-white ml-3 font-medium text-sm leading-5 text-center pl-5 pr-5 pb-2 pt-2 rounded-lg items-center inline-flex cursor-pointer hover:bg-red-800"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 -ml-1 mr-1 block align-middle"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            {isFormSuccess ? (
              <tr>
                <td className="w-full" colSpan={4}>
                  <UserChangePassword
                    onSubmit={handleSubmitChangePassword}
                    setIsFormSuccess={setIsFormSuccess}
                    isSuccess={isSuccess}
                  />
                </td>
              </tr>
            ) : (
              ""
            )}
          </tbody>
        </table>
      </div>
      <section className="mx-auto max-w-screen-xl mt-5">
        <div className="bg-white dark:bg-gray-800 relative sm:rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <UserOrders />
          </div>
        </div>
      </section>
    </>
  );
};
function useQueryIn(id: string) {
  const usersIdsQuery = useUserById(id);
  return usersIdsQuery;
}
export default UsersView;
