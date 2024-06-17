//import React from 'react'
import OrdersList from "../orders/Orders-list";
const orders = [1, 2, 3, 4, 5];

const UserOrders = () => {
  return (
    <>
      <div className="relative overflow-hidden bg-white mb-2">
        <div>
          <h5 className="mr-3 font-semibold dark:text-white">User Orders</h5>
          <p className="text-gray-500 dark:text-gray-400">
            All placed orders by user
          </p>
        </div>
      </div>

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-md ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-4">
              Product name
            </th>
            <th scope="col" className="px-4 py-3">
              Category
            </th>
            <th scope="col" className="px-4 py-3">
              Brand
            </th>
            <th scope="col" className="px-4 py-3">
              Description
            </th>
            <th scope="col" className="px-4 py-3">
              Price
            </th>
            <th scope="col" className="px-4 py-3">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((_item, i) => (
            <OrdersList key={i} />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default UserOrders;
