//import { Fragment } from "react";
//import { useNavigate } from "react-router-dom";
//import { Button } from "flowbite-react";
import {
  // HiOutlineSearch,
  //HiOutlineChatAlt,
  HiOutlineBell,
  HiOutlineChatAlt,
} from "react-icons/hi";

import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { setValue_ }: any = useAuth();
  const navigate = useNavigate();

  const handleLogout = (_e: any) => {
    localStorage.removeItem("token");
    setValue_(null);
    navigate("/auth/login");
  };
  return (
    <>
      <div className="bg-white h-16 px-4 flex justify-between items-center">
        <div className="relative  border border-gray-200"></div>
        <div className="flex items-center gap-2 mr-2">
          <div className="relative">
            <button
              className={
                "bg-gray-100  p-1.5 rounded-sm inline-flex item-center text-gray hove:text-opacity-100 focus:outline-none active:bg-gray-100 "
              }
            >
              <HiOutlineChatAlt fontSize={24} />
            </button>

            <div className="absolute right-0 z-10 mt-2.5 w-80 none">
              <div className="bg-white raounded-sn shadow-md right-1 ring-black ring-opacity-5 px-2 py-2">
                <strong className="text-grey-700 font-medium">message</strong>
                <div className="mt-2 text-sm">this is panel</div>
              </div>
            </div>
          </div>
          <HiOutlineBell fontSize={24} />
          <div className="relative inline-block text-left">
            <div>
              <div className="ml-2 inline-flex rounded-full outline-none focus:ring-2 focus:ring-neutral-400 ">
                <span className="sr-only">bg open</span>
                <div
                  className="h-10 w-10 rounded-full bg-sly-500 bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage:
                      'url("https://images.unsplash.com/photo-1548918901-9b31223c5c3a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=80&ixid=MnwxfDB8MXxyYW5kb218MHx8ZmFjZXx8fHx8fDE3MDMxNTM0NTM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=80")',
                  }}
                >
                  <span className="sr-only">Hugh Jackson</span>
                </div>
              </div>
            </div>
            <div>
              <div className="origin-top-right z-10 absolute ring-black right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <div>
                    <div className="bg-gray-100 text-gray-700 focus:bg-gray-200 cursor-pointer rounded round-sm px-4 py-2">
                      your profile
                    </div>
                  </div>
                  <div>
                    <div className="bg-gray-100  text-gray-700 focus:bg-gray-200 cursor-pointer rounded round-sm px-4 py-2">
                      settings
                    </div>
                  </div>
                  <div>
                    <div
                      onClick={handleLogout}
                      className="bg-gray-100   text-gray-700 focus:bg-gray-200 cursor-pointer rounded round-sm px-4 py-2"
                    >
                      Logout
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
