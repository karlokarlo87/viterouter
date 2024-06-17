import { FaPlus } from "react-icons/fa";
import { IoIosArrowDown, IoMdHome, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
export default function ProductsNav() {
  const [isHidden, setHidden] = useState("hidden");

  function showDropList() {
    setHidden(isHidden == "show" ? "hidden" : "show");
  }
  return (
    <>
      <div className="mb-5">
        <div className="">
          <div className="">
            <div className="flex-row items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">
              <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                  <li className="inline-flex items-center">
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                    >
                      <IoMdHome className="text-lg" />
                      Home
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <IoIosArrowForward />
                      <a
                        href="#"
                        className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                      >
                        Projects
                      </a>
                    </div>
                  </li>
                  <li aria-current="page">
                    <div className="flex items-center">
                      <IoIosArrowForward />
                      <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                        Flowbite
                      </span>
                    </div>
                  </li>
                </ol>
              </nav>
              <div className="=">
                <button
                  type="button"
                  className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 bg-primary-700 hover:bg-primary-800  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700  dark:focus:ring-primary-800"
                >
                  <FaPlus />
                  Add new product
                </button>
              </div>
            </div>
            <div className="grid w-full gap-4 pb-4 grid-cols-1 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2">
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option>Brand</option>
                <option value="samsung">Samsung</option>
                <option value="apple">Apple</option>
                <option value="nokia">Nokia</option>
                <option value="sony">Sony</option>
              </select>
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:ring-primary-500 focus:border-primary-500  dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option>Category</option>
                <option value="tablet">Tablet</option>
                <option value="phone">Phone</option>
                <option value="tv">TV</option>
                <option value="console">Console</option>
              </select>
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option>Color</option>
                <option value="black">Black</option>
                <option value="white">White</option>
                <option value="silver">Silver</option>
              </select>
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:ring-primary-500 focus:border-primary-500  dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option>Category</option>
                <option value="tablet">Tablet</option>
                <option value="phone">Phone</option>
                <option value="tv">TV</option>
                <option value="console">Console</option>
              </select>
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option>Sold by</option>
                <option value="samsung">Samsung</option>
                <option value="apple">Apple</option>
                <option value="nokia">Nokia</option>
                <option value="flowbite">Flowbite</option>
              </select>
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:ring-primary-500 focus:border-primary-500  dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option>Return Policy</option>
                <option value="30-days">30 days</option>
                <option value="14-days">14 days</option>
                <option value="no-returns">No returns</option>
              </select>
            </div>
            <div className="">
              <div className="">
                <div className="flex relative">
                  <div className="mr-1">Show by:</div>
                  <div className="flex items-center me-4 ">
                    <label
                      htmlFor="inline-radio"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
                    >
                      <input
                        id="inline-radio"
                        type="radio"
                        value=""
                        name="inline-radio-group"
                        className="cursor-pointer text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      Inline 1
                    </label>
                  </div>
                  <div className="flex items-center me-4 ">
                    <label
                      htmlFor="inline-2-radio"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
                    >
                      <input
                        id="inline-2-radio"
                        type="radio"
                        value=""
                        name="inline-radio-group"
                        className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      Inline 2
                    </label>
                  </div>
                  <div className="flex items-center me-4">
                    <label
                      htmlFor="inline-checked-radio"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer flex items-center"
                    >
                      <input
                        id="inline-checked-radio"
                        type="radio"
                        value=""
                        name="inline-radio-group"
                        className="mr-1 cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      Inline checked
                    </label>
                  </div>
                  <div className="absolute right-0 top-0">
                    <button
                      id="dropdownDefaultButton"
                      data-dropdown-toggle="dropdown"
                      className="w-44 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      type="button"
                      onClick={() => showDropList()}
                    >
                      Dropdown button
                      <IoIosArrowDown />
                    </button>
                    <div
                      id="dropdown"
                      className={
                        "z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700  " +
                        isHidden
                      }
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDefaultButton"
                      >
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Dashboard
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Settings
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Earnings
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Sign out
                          </a>
                        </li>
                      </ul>
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
