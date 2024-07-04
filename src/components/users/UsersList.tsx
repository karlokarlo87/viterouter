import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { useUsersId } from "../../services/querises";

import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
import { MdOutlineCreate } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Pagination } from "flowbite-react";

//import { useAuth } from "../../context/AuthContext";
import axios from "axios";
const PostList = () => {
  const navigate = useNavigate();
  let { from }: any = useParams();
  const [currentPage, setCurrentPage] = useState(2);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    navigate("/users/limit/" + page);
  };
  useEffect(() => {
    setCurrentPage(parseInt(from));
  });
  console.log(currentPage);
  const usersIdsQuery = useUsersId(from);
  const [_isError, setIsError] = useState(false);
  useEffect(() => {
    setIsError(usersIdsQuery.isError);
  }, [usersIdsQuery.isError]);
  if (_isError) {
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.removeItem("token");
    return <Navigate to="/auth/login" />;
  }
  if (usersIdsQuery.isPending) {
    return <span>...loading</span>;
  }
  if (usersIdsQuery.isError) {
    return <span>ther is an error!</span>;
  }

  const usersIdsQueryMap = usersIdsQuery.data["user"];
  const usersCountMap = usersIdsQuery.data["count"];
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
          <div>
            <Link
              type="button"
              className="whitespace-nowrap bg-blue-700 text-white font-medium text-sm leading-5 text-center pl-5 pr-5 pb-2 pt-2 rounded-lg items-center inline-flex cursor-pointer hover:bg-blue-800"
              to={"/users/create"}
            >
              <MdOutlineCreate className="w-5 h-5 -ml-1 mr-1 block align-middle" />
              Create User
            </Link>
          </div>
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for users"
            />
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Roles
              </th>
              <th scope="col" className="px-6 py-3">
                phone
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {usersIdsQueryMap.map(
              (
                data: {
                  image: string;
                  name: string;
                  lname: string;
                  email:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | null
                    | undefined;
                  role:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | null
                    | undefined;
                  phone:
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | null
                    | undefined;
                  id: string;
                },
                index: Key | null | undefined
              ) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src={"http://localhost:3000/asset/upload/" + data.image}
                      alt="Jese image"
                    />
                    <div className="ps-3">
                      <div className="text-base font-semibold">
                        {" "}
                        {data.name + " " + data.lname}
                      </div>
                      <div className="font-normal text-gray-500">
                        {data.email}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4"> {data.role}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                      {data.phone}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      to={"/users/view/" + data.id}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit user
                    </Link>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(usersCountMap / 20)}
          onPageChange={onPageChange}
          showIcons
          layout="pagination"
        />
      </div>
    </>
  );
};

export default PostList;
