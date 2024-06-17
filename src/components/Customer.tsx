//import React from 'react'

import { FiUpload } from "react-icons/fi";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { Button, Tooltip } from "flowbite-react";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function Customer() {
  return (
    <>
      <form action="#" className="">
        <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Update User
          </h3>
        </div>

        <h2 id="accordion-collapse-heading-1">
          <span>General Information</span>
        </h2>
        <div>
          <div className="max-w-lg mx-auto">
            <img
              className="w-20 h-20 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
              alt="Helene avatar"
            />
            <div className="">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="user_avatar"
              >
                Upload file
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                type="file"
              />
              <div
                className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="user_avatar_help"
              >
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </div>
              <p className="" id="file_input_help"></p>
              <div className="">
                <button
                  type="button"
                  className="text-white relative bg-blue-700 hover:bg-blue-800 pl-7 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  <FiUpload className="w-4 h-4 me-2 absolute left-2 " />
                  Upload new picture
                </button>
                <button
                  type="button"
                  className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Delete
                </button>
              </div>
            </div>

            <div>
              <label
                htmlFor="first-name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First Name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
              />
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last Name
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john@company.com"
              />
            </div>
            <div>
              <label
                htmlFor="user-permissions"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                User Permissions
                <div className="flex gap-2">
                  <Tooltip
                    content="User permissions, part of the overall user management
                      process, are access granted to users to specific resources
                      such as files, applications, networks, or devices."
                    style="light"
                  >
                    <Button className="border-none text-color-black width-auto">
                      <HiQuestionMarkCircle />
                    </Button>
                  </Tooltip>
                </div>
                <button
                  type="button"
                  data-tooltip-target="tooltip-dark"
                  data-tooltip-style="dark"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  <span className=""></span>
                </button>
              </label>
              <select
                id="user-permissions"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Operational</option>
                <option>Non Operational</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="job-title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Job Title
              </label>
              <input
                type="text"
                name="job-title"
                id="job-title"
                defaultValue="Back-end software engineer"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Ex. React Developer"
              />
            </div>
            <div>
              <label
                htmlFor="languages"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Languages
              </label>
              <input
                type="text"
                name="languages"
                id="languages"
                defaultValue="English, German"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Ex. English, Spanish"
              />
            </div>
            <div>
              <label htmlFor="account" className="relative">
                Account
                <Tooltip content="Choose here your account type." style="light">
                  <Button className="border-none text-color-black width-auto">
                    <HiQuestionMarkCircle />
                  </Button>
                </Tooltip>
              </label>
              <select
                id="account"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>PRO Account</option>
                <option>Default Account</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="user-role"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                User Role
                <Tooltip
                  content="Flowbite provides 7 predefined roles: Owner, Admin,
                      Editor, Contributor and Viewer. Assign the most suitable
                      role to each user, giving them the most appropriate level
                      of control."
                  style="light"
                >
                  <Button className="border-none text-color-black width-auto">
                    <HiQuestionMarkCircle />
                  </Button>
                </Tooltip>
              </label>
              <select
                id="user-role"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Owner</option>
                <option>Admin</option>
                <option>Editor</option>
                <option>Contributor</option>
                <option>Viewer</option>
              </select>
            </div>
            <div className="">
              <label
                htmlFor="email-status"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email Status
                <Tooltip
                  content="As an administrator, you can view the status of a user's
                      email. The status indicates whether a user's email is
                      verified or not."
                  style="light"
                >
                  <Button className="border-none text-color-black width-auto">
                    <HiQuestionMarkCircle />
                  </Button>
                </Tooltip>
              </label>
              <select
                id="email-status"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Verified</option>
                <option>Not verified</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="•••••••••"
                autoComplete=""
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm password
              </label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="•••••••••"
                autoComplete=""
              />
            </div>
            <div className="">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="role"
              >
                Assign Role
              </label>
              <div className="flex gap-3">
                <div className="flex items-center mb-4">
                  <input
                    id="checkbox-1"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="checkbox-1"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Administrator
                  </label>
                </div>

                <div className="flex items-center mb-4">
                  <input
                    id="inline-2-checkbox"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="inline-2-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Member
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="inline-3-checkbox"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="inline-3-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Viewer
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Status
              </div>

              <label className="relative inline-flex items-center mb-5 cursor-pointer">
                <input
                  type="checkbox"
                  defaultValue=""
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Inactive
                </span>
              </label>
            </div>
          </div>

          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600 p-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Additional Information
            </h3>
          </div>
          <div id="accordion-collapse-body-2" className="px-8">
            <div className="">
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="">
                  <label
                    htmlFor="skills"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Skills
                  </label>
                  <input
                    type="text"
                    name="skills"
                    id="skills"
                    defaultValue="Tailwind CSS, Flowbite, React"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Ex. Figma, HTML, Javascript"
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="phone-number"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone-number"
                    id="phone-number"
                    defaultValue="+1631 442 978"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Ex. +1234 567 890"
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="linkedin"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Linkedin URL
                  </label>
                  <input
                    type="url"
                    name="linkedin"
                    id="linkedin"
                    defaultValue="https://www.linkedin.com/in/bonniegreen/"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Ex. https://www.linkedin.com/in/example/"
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="facebook"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Facebook
                  </label>
                  <input
                    type="url"
                    name="facebook"
                    id="facebook"
                    defaultValue="https://www.facebook.com/bonniegreen"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Ex. https://www.facebook.com/example"
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="twitter"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Twitter
                  </label>
                  <input
                    type="url"
                    name="twitter"
                    id="twitter"
                    defaultValue="https://twitter.com/bonniegreen"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Ex. https://twitter.com/example"
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="personal-website"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Personal Website
                  </label>
                  <input
                    type="url"
                    name="personal-website"
                    id="personal-website"
                    defaultValue="https://flowbite.com"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Ex. https://website.com"
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="country"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Country
                  </label>

                  <select
                    id="country"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option>United States</option>
                    <option value="1">Australia</option>
                    <option value="2">United Kingdom</option>
                    <option value="3">Italy</option>
                    <option value="4">Germany</option>
                    <option value="5">Spain</option>
                    <option value="6">France</option>
                    <option value="7">Canada</option>
                  </select>
                </div>
                <div className="">
                  <label
                    htmlFor="address"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    defaultValue="92 Milles Drive, Newark, NJ 07123"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Ex. 92 Milles Drive, Newark, NJ 07123"
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="timezone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Timezone
                  </label>
                  <input
                    type="text"
                    name="timezone"
                    id="timezone"
                    defaultValue="GMT+3"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Ex. GMT+2"
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="biography"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Biography
                </label>
                <textarea
                  id="biography"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your biography..."
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 mt-2 items-center justify-center">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Update user
          </button>
          <button
            type="button"
            className="flex justify-center justify-items-center gap-1 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            <RiDeleteBin5Line className="text-lg" />
            Delete
          </button>
        </div>
      </form>
    </>
  );
}
