//import React from 'react'
import { CiMedicalCase } from "react-icons/ci";
import { IoCubeOutline, IoCheckmark } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
export default function Order() {
  const order = [1, 2, 3];
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
        <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
          <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden p-4">
            <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-4 pb-0">
              <div className="flex items-center justify-between">
                <div>
                  <h6 className="dark:text-white">Order Details</h6>
                  <p className="mb-0 text-sm leading-normal">
                    Order no.
                    <b>241342</b>
                    from
                    <b>23.02.2021</b>
                  </p>
                  <p className="text-sm leading-normal">
                    Code:
                    <b>KF332</b>
                  </p>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto flex flex-col gap-2 mt-2">
              {order.map((_i) => (
                <a
                  key={_i}
                  href="#"
                  className="flex-row p-3 rounded-lg w-full flex relative hover:no-underline border hover:bg-gray-100"
                >
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                    alt=""
                    className="h-20  "
                  />
                  <div className="ml-6 justify-between flex-col flex w-full">
                    <div className="flex w-full  gap-2">
                      <div className="flex h-full flex-col justify-between flex-grow">
                        <h3 className="text-lg leading-7 font-semibold opacity-100 text-gray-800 mb-3">
                          Apple iMac 27"
                        </h3>
                        <div>
                          <h6 className="text-sm leading-5 font-normal text-gray-600">
                            Category
                          </h6>
                          <p className="text-sm leading-5 font-semibold text-gray-900">
                            PC/Desktop PC
                          </p>
                        </div>
                      </div>
                      <div className="min-w-24">
                        <h6 className="text-sm leading-5 font-normal text-gray-600">
                          Price
                        </h6>
                        <p className="text-sm leading-5 font-semibold text-gray-900">
                          $2999
                        </p>
                      </div>
                      <div className="min-w-24">
                        <h6 className="text-sm leading-5 font-normal text-gray-600">
                          Stock
                        </h6>
                        <p className="text-sm leading-5 font-semibold text-gray-900">
                          300
                        </p>
                      </div>
                      <div className="min-w-24">
                        <h6 className="text-sm leading-5 font-normal text-gray-600">
                          Total Sales
                        </h6>
                        <p className="text-sm leading-5 font-semibold text-gray-900">
                          466
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="relative overflow-x-auto mt-3 border rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Billing Details
                    </th>
                    <th scope="col" className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    ></th>

                    <td className="px-6 py-4 text-right"></td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Name
                    </th>

                    <td className="px-6 py-4 text-right">karlo piranishvili</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Address
                    </th>

                    <td className="px-6 py-4 text-right">
                      Mountain view, Joice 12 San Francisco, CA 82987, USA
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="font-semibold text-gray-900 dark:text-white">
                    <th scope="row" className="px-6 py-3 text-base">
                      Phone
                    </th>
                    <td className="px-6 py-3 text-right">123 456 789</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="relative overflow-x-auto mt-3 border rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Order Status
                    </th>
                    <th scope="col" className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-gray-800 bg-green-100 bg-opacity-20 dark:bg-gray-900 dark:bg-opacity-40">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white "
                    >
                      <div className="relative h-10 w-10 rounded-full border border-gray-700 dark:border-gray-200">
                        <CiMedicalCase className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bi bi-bag text-lg" />
                      </div>
                    </th>

                    <td className="px-6 py-4 text-right ">
                      <div className="text-xs text-gray-500 self-center">
                        Aug 19, 2025 02.21 am
                      </div>
                      <p className="text-sm font-semibold">Order placed</p>
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800 bg-green-100 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-40">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div className="relative h-10 w-10 rounded-full border border-gray-700 dark:border-gray-200">
                        <IoCubeOutline className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bi bi-box text-lg" />
                      </div>
                    </th>

                    <td className="px-6 py-4 text-right">
                      <div className="text-xs text-gray-500 self-center ">
                        Aug 19, 2025 02.21 am
                      </div>

                      <p className="text-sm font-semibold">Packing</p>
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div className="relative h-10 w-10 rounded-full border border-gray-700 dark:border-gray-200">
                        <LiaShippingFastSolid className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bi bi-truck text-lg" />
                      </div>
                    </th>

                    <td className="px-6 py-4 text-right">
                      <div className="text-xs text-gray-500 self-center">
                        coming soon
                      </div>
                      <p className="text-sm font-semibold">Shipped</p>
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div className="relative h-10 w-10 rounded-full border border-gray-700 dark:border-gray-200">
                        <IoCheckmark className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bi bi-truck text-lg" />
                      </div>
                    </th>

                    <td className="px-6 py-4 text-right">
                      <div className="text-xs text-gray-500 self-center">
                        coming soon
                      </div>
                      <p className="text-sm font-semibold">Delivered</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="relative overflow-x-auto mt-3 border rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tbody>
                  <tr className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Products-Total
                    </th>

                    <td className="px-6 py-4 text-right">5</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Discount
                    </th>

                    <td className="px-6 py-4 text-right">15%</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      shiping
                    </th>

                    <td className="px-6 py-4 text-right">$99</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="font-semibold text-gray-900 dark:text-white">
                    <th scope="row" className="px-6 py-3 text-base">
                      Total Price
                    </th>
                    <td className="px-6 py-3 text-right">$21,000</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
