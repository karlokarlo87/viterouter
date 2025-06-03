
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import { tokenDecode } from "../../functions/tokenDecode";
import { Avatar, Dropdown } from "flowbite-react";
import imgUrl from "../../assets/small_logo.png";
import {
  MdOutlineWifiPassword,
  MdOutlineManageAccounts,
  MdOutlineEmail,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
interface IQuestion {
  value1?: string;
}

export default function Header() {
  const { value1 }: IQuestion = useAuth();
  const name = tokenDecode(value1).name;
  const lname = tokenDecode(value1).lname;
  const email = tokenDecode(value1).email;
  const navigate = useNavigate();
   

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth/login");
  };
  return (
    <>
      <nav className="font-['custom-3'] bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
        <div className="min-w-[300px] flex flex-wrap justify-between items-center">
          <div className="flex justify-start items-center">
            <button
              data-drawer-target="drawer-navigation"
              data-drawer-toggle="drawer-navigation"
              aria-controls="drawer-navigation"
              className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer xl:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                aria-hidden="true"
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <Link className="flex items-center justify-between mr-4" to={"/"}>
              <img src={imgUrl} className="mr-3 h-8" />
            </Link>
          </div>
          <div className="flex items-center lg:order-2">
            <Dropdown
              className="max-w-sm text-base list-none bg-gray-50 dark:bg-gray-600 dark:text-gray-300 rounded divide-y"
              arrowIcon={false}
              inline
              label={
                <div className="border p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                  <span className="sr-only">View notifications</span>

                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                  </svg>
                </div>
              }
            >
              <Dropdown.Item className="p-0 m-0 px-0 py-0">
                <div className="overflow-hidden z-50 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 dark:divide-gray-600 dark:bg-gray-700 ">
                  <div className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300">
                    Notifications
                  </div>
                  <div>
                    <a
                      href="#"
                      className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <div className="flex-shrink-0">
                        <img
                          className="w-11 h-11 rounded-full"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png"
                          alt="Robert image"
                        />
                        <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-purple-500 rounded-full border border-white dark:border-gray-700">
                          <svg
                            aria-hidden="true"
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="pl-3 w-full text-left">
                        <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Robert Brown
                          </span>
                          posted a new video: Glassmorphism - learn how to
                          implement the new design trend.
                        </div>
                        <div className="text-xs font-medium text-primary-600 dark:text-primary-500">
                          3 hours ago
                        </div>
                      </div>
                    </a>
                  </div>
                  <a
                    href="#"
                    className="block py-2 text-md font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:underline"
                  >
                    <div className="inline-flex items-center">
                      <svg
                        aria-hidden="true"
                        className="mr-2 w-4 h-4 text-gray-500 dark:text-gray-400"
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
                      View all
                    </div>
                  </a>
                </div>
              </Dropdown.Item>
            </Dropdown>

            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar rounded size="sm"></Avatar>}
            >
              <Dropdown.Header className="px-0 py-0">
                <div className="py-3 px-4">
                  <span className="flex block text-sm font-semibold text-gray-900 dark:text-white">
                    <CgProfile className="flex items-center text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white mr-2 text-xl" />
                    {name} {lname}
                  </span>
                  <span className="flex block text-sm text-gray-900 truncate dark:text-white mt-2">
                    <MdOutlineEmail className="flex items-center text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white mr-2 text-xl" />
                    {email}
                  </span>
                </div>
              </Dropdown.Header>
              <Dropdown.Item>
                <Link
                  to={"profile"}
                  className="flex block text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <MdOutlineManageAccounts className="flex items-center text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white mr-2 text-xl" />
                  პროფილი
                </Link>
              </Dropdown.Item>

              <Dropdown.Item>
                <Link
                  to={"passwordchange"}
                  className="flex block text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <MdOutlineWifiPassword className="flex items-center text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white mr-2 text-xl" />
                  პაროლის შეცვლა
                </Link>
              </Dropdown.Item>

              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogout}>გამოსვლა</Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </nav>
    </>
  );
}
