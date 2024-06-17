//import React from 'react'

import { Link } from "react-router-dom";
import ProductList from "./products/Product-list";
import ProductsNav from "./products/Products-nav";
import ProductSearch from "./products/ProductSearch";
export default function Products() {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      <ProductSearch />
      <div className="overflow-x-auto max-w-[calc(100vw-240px)]">
        <p>All Products</p>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
              </th>
              <th scope="col" className="p-4">
                Product
              </th>
              <th scope="col" className="p-4">
                Category
              </th>
              <th scope="col" className="p-4">
                Stock
              </th>
              <th scope="col" className="p-4">
                Sales/Day
              </th>
              <th scope="col" className="p-4">
                Sales/Month
              </th>
              <th scope="col" className="p-4">
                Sales
              </th>
              <th scope="col" className="p-4">
                Revenue
              </th>
              <th scope="col" className="p-4">
                Last Update
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((_item, i) => (
              <ProductList key={i} />
            ))}
          </tbody>
        </table>
      </div>
      <ProductsNav />
      <Link to="/" className="underline mt-2 block">
        Go To dashboard
      </Link>
    </>
  );
}
