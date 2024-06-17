//import React from 'react'
import classNames from "classnames";
import { FcBullish } from "react-icons/fc";
import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
  HiOutlineLogout,
} from "react-icons/hi";
import { SlSocialDropbox } from "react-icons/sl";
import { VscFilter } from "react-icons/vsc";
import { Link, useLocation } from "react-router-dom";
const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base ";
export default function Sidebar() {
  let { pathname } = useLocation();
  pathname = pathname.split("/")[1];

  return (
    <>
      <div className="bg-neutral-900 w-60 p-3 flex flex-col text-white min-w-60 h-screen fixed">
        <div className="flex items-center gap-2 px-1 py-3">
          <FcBullish fontSize={24} />
          <span className="text-neutral-100 text-lg">OpenShop</span>
        </div>
        <div className="flex-1 py-8 flex flex-col gap-0.5">
          <Link
            className={classNames(
              pathname == "dashboard" || pathname == "/"
                ? "text-white bg-neutral-700"
                : "text-neutral-400",
              linkClass
            )}
            to="/dashboard"
          >
            <HiOutlineViewGrid />
            <span className="text-xl">Dashboard</span>
          </Link>
          <Link
            className={classNames(
              pathname == "products"
                ? "text-white bg-neutral-700"
                : "text-neutral-400",
              linkClass
            )}
            to="/products"
          >
            <HiOutlineCube />
            <span className="text-xl">Products</span>
          </Link>
          <Link
            className={classNames(
              pathname == "orders"
                ? "text-white bg-neutral-700"
                : "text-neutral-400",
              linkClass
            )}
            to="/orders"
          >
            <HiOutlineShoppingCart />
            <span className="text-xl">Orders</span>
          </Link>
          <Link
            className={classNames(
              pathname == "users"
                ? "text-white bg-neutral-700"
                : "text-neutral-400",
              linkClass
            )}
            to="users/limit/0"
          >
            <HiOutlineUsers />
            <span className="text-xl">Customers</span>
          </Link>
          <Link
            className={classNames(
              pathname == "transactions"
                ? "text-white bg-neutral-700"
                : "text-neutral-400",
              linkClass
            )}
            to="/transactions"
          >
            <HiOutlineDocumentText />
            <span className="text-xl">Transactions</span>
          </Link>
          <Link
            className={classNames(
              pathname == "Categories"
                ? "text-white bg-neutral-700"
                : "text-neutral-400",
              linkClass
            )}
            to="/Categories"
          >
            <SlSocialDropbox />
            <span className="text-xl">Categories</span>
          </Link>
          <Link
            className={classNames(
              pathname == "categorytype"
                ? "text-white bg-neutral-700"
                : "text-neutral-400",
              linkClass
            )}
            to="/categorytype"
          >
            <VscFilter />
            <span className="text-xl">CategoryType</span>
          </Link>
        </div>
        <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
          <Link
            className={classNames(
              pathname == "settings"
                ? "text-white bg-neutral-700"
                : "text-neutral-400",
              linkClass
            )}
            to="/settings"
          >
            <HiOutlineCog />

            <span className="text-xl">Settings</span>
          </Link>
          <Link
            className={classNames(
              pathname == "help"
                ? "text-white bg-neutral-700"
                : "text-neutral-400",
              linkClass
            )}
            to="/help"
          >
            <HiOutlineQuestionMarkCircle />
            <span className="text-xl">Halp & center</span>
          </Link>
          <Link className={classNames("text-red-500", linkClass)} to="/logout">
            <HiOutlineLogout />
            <span className="text-xl">Log Out</span>
          </Link>
        </div>
      </div>
    </>
  );
}
