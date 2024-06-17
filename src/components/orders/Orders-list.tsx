//import React from 'react'
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";
export default function OrdersList() {
  return (
    <>
      <tr className="border-b dark:border-gray-700">
        <th
          scope="row"
          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          Apple iMac 27&#34;
        </th>
        <td className="px-4 py-3">PC</td>
        <td className="px-4 py-3">Apple</td>
        <td className="px-4 py-3 max-w-[12rem] truncate">
          What is a product description? A product description describes a
          product.
        </td>
        <td className="px-4 py-3">$2999</td>
        <td className="px-4 py-3 flex items-center justify-end border-none">
          <button
            id="apple-imac-27-dropdown-button"
            data-dropdown-toggle="apple-imac-27-dropdown"
            className="inline-flex items-center text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 p-1.5 dark:hover-bg-gray-800 text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
            type="button"
          >
            <Link to="/order">
              <BiDotsHorizontalRounded />
            </Link>
          </button>
        </td>
      </tr>
    </>
  );
}
