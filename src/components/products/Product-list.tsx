//import React from 'react'

import { RiDeleteBin5Fill } from "react-icons/ri";
import { PiEyeBold } from "react-icons/pi";
import { FaEdit } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
export default function ProductList() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/product");
  };
  function handleEvent(event: { stopPropagation: () => void }) {
    event.stopPropagation();
  }
  return (
    <>
      <tr className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
        <td className="p-4 w-4">
          <div className="flex items-center">
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              onClick={(e) => handleEvent(e)}
              className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
        </td>
        <th
          scope="row"
          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <div className="flex items-center mr-3">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
              alt="iMac Front Image"
              className="h-8 w-auto mr-3"
            />
            Apple iMac 27"
          </div>
        </th>
        <td className="px-4 py-3">
          <span className="bg-sky-100 text-sky-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-sky-900 dark:text-sky-300 whitespace-nowrap">
            Desktop PC
          </span>
        </td>
        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <div className="flex items-center">
            <div className="h-4 w-4 rounded-full inline-block mr-2 bg-red-700"></div>
            95
          </div>
        </td>
        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          1.47
        </td>
        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          0.47
        </td>

        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <div className="flex items-center">
            <FaCartShopping className="w-5 h-5 text-gray-400 mr-2" />
            10
          </div>
        </td>
        <td className="px-4 py-3">$3.2M</td>
        <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <div className="flex items-center space-x-4">
            <button
              onClick={(_e) => handleClick()}
              type="button"
              className="py-2 px-3 flex items-center text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 hover:bg-blue-700 focus:ring-primary-800 "
            >
              <FaEdit className="mr-2" />
              Edit
            </button>
            <button
              type="button"
              className="py-2 px-3 flex items-center text-sm font-medium text-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200  dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <PiEyeBold className="mr-2" />
              Preview
            </button>
            <button
              type="button"
              className="flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            >
              <RiDeleteBin5Fill className="mr-2" />
              Delete
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
