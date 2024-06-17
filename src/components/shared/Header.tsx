import { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  // HiOutlineSearch,
  HiOutlineChatAlt,
  HiOutlineBell,
} from "react-icons/hi";
import { Menu, Popover, Transition } from "@headlessui/react";
import classNames from "classnames";
import { AuthContext, useAuth } from "../../context/AuthContext";

export default function Header() {
  const { setValue_ } = useAuth();
  const navigate = useNavigate();

  const handleLogout = (_e) => {
    localStorage.removeItem("token");
    setValue_(null);
    navigate("/auth/login");
  };
  return (
    <>
      <div className="bg-white h-16 px-4 flex justify-between items-center">
        <div className="relative  border border-gray-200">
          {/* <HiOutlineSearch
            fontSize={20}
            className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"
          />
          <input
            type="text"
            placeholder="search..."
            className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border-gray-300 rounded-sm px-4 pl-11 pr-4"
          /> */}
        </div>
        <div className="flex items-center gap-2 mr-2">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open && "bg-gray-100",
                    "p-1.5 rounded-sm inline-flex item-center text-gray hove:text-opacity-100 focus:outline-none active:bg-gray-100"
                  )}
                >
                  <HiOutlineChatAlt fontSize={24} />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                    <div className="bg-white raounded-sn shadow-md right-1 ring-black ring-opacity-5 px-2 py-2">
                      <strong className="text-grey-700 font-medium">
                        message
                      </strong>
                      <div className="mt-2 text-sm">this is panel</div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          <HiOutlineBell fontSize={24} />
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="ml-2 inline-flex rounded-full outline-none focus:ring-2 focus:ring-neutral-400 ">
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
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right z-10 absolute ring-black right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={classNames(
                          active && "bg-gray-100",
                          "text-gray-700 focus:bg-gray-200 cursor-pointer rounded round-sm px-4 py-2"
                        )}
                      >
                        your profile
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={classNames(
                          active && "bg-gray-100",
                          "text-gray-700 focus:bg-gray-200 cursor-pointer rounded round-sm px-4 py-2"
                        )}
                      >
                        settings
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        onClick={handleLogout}
                        className={classNames(
                          active && "bg-gray-100",
                          "text-gray-700 focus:bg-gray-200 cursor-pointer rounded round-sm px-4 py-2"
                        )}
                      >
                        Logout
                      </div>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </>
  );
}
