import { useUserById } from "../../services/user/querises";
import { useUpdateUser } from "../../services/user/mutation";
import { Datepicker } from "flowbite-react";
import {
  EamilFindUser,
  PhoneFindUser,
  PersonalFindUser,
} from "../../services/user/querises";
import { useEffect, useState } from "react";
import UserValidation from "../../validators/UserValidation";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { tokenDecode } from "../../functions/tokenDecode";
import Succsess from "../../messages/success";
interface IQuestion {
  value1?: string;
}
const ProfileView = () => {
  const { value1 }: IQuestion = useAuth();
  const userId = tokenDecode(value1).id;
  const usersIdsQuery = useUserById(`${userId}`);

  const [isFormSuccess, setIsFormSuccess] = useState(false);

  const [emailErrors, setEmailErrors] = useState("");
  const [phoneErrors, setPhoneErrors] = useState("");
  const [personalErrors, setPersonalErrors] = useState("");
  //const [usernameErrors, setUsernameErrors] = useState("");
  const [errors, setError] = useState({
    id: "",
    name: "",
    lname: "",
    username: "",
    email: "",
    adress: "",
    birth_date: "",
    country_code: "",
    phone: "",
    created_at: "",
    image: "",
    last_login: "",
    country_id: "",
    city_id: "",
    facebook: "",
    google: "",
    personal_number: "",
    name_en: "",
    lname_en: "",
    adress_pact: "",
    customer_type: "",
  });
  const [users, setUsers] = useState({
    id: "",
    name: "",
    lname: "",
    email: "",
    username: "",
    birth_date: "",
    phone: "",
    adress: "",
    role: "",
    country_code: "",
    created_at: "",
    image: "",
    last_login: "",
    country_id: "",
    city_id: "",
    facebook: "",
    google: "",
    password: "",
    personal_number: "",
    name_en: "",
    lname_en: "",
    adress_pact: "",
    customer_type: "",
    active: "",
  });

  const createUserMutation = useUpdateUser();

  let createEmailMutation = EamilFindUser(users.email, userId);
  let createPhoneMutation = PhoneFindUser(users.phone, userId);

  let createPersonalMutation = PersonalFindUser(users.personal_number, userId);
  useEffect(() => {
    checkEmailError();
  }, [createEmailMutation.data]);
  useEffect(() => {
    checkPhoneError();
  }, [createPhoneMutation.data]);
  useEffect(() => {
    checkPersonalError();
  }, [createPersonalMutation.data]);
  useEffect(() => {
    setUsers({
      id: usersIdsQuery.data?.id || "",
      name: usersIdsQuery.data?.name || "",
      lname: usersIdsQuery.data?.lname || "",
      email: usersIdsQuery.data?.email || "",
      username: usersIdsQuery.data?.username || "",
      birth_date: usersIdsQuery.data?.birth_date || "",
      phone: usersIdsQuery.data?.phone || "",
      adress: usersIdsQuery.data?.adress || "",
      role: usersIdsQuery.data?.role || "",
      country_code: usersIdsQuery.data?.country_code || "",
      created_at: usersIdsQuery.data?.created_at || "",
      image: usersIdsQuery.data?.image || "",
      last_login: usersIdsQuery.data?.last_login || "",
      country_id: usersIdsQuery.data?.country_id || "",
      city_id: usersIdsQuery.data?.city_id || "",
      facebook: usersIdsQuery.data?.facebook || "",
      google: usersIdsQuery.data?.google || "",
      password: usersIdsQuery.data?.password || "",
      active: "1",
    });
  }, [usersIdsQuery.isSuccess]);

  const checkEmailError = () => {
    if (createEmailMutation.isSuccess) {
      if (!createEmailMutation.data) {
        setEmailErrors("email is not unique");
      } else {
        setEmailErrors("");
      }
    }
  };
  const checkPhoneError = () => {
    if (createPhoneMutation.isSuccess) {
      if (!createPhoneMutation.data) {
        setPhoneErrors("Phone is not unique");
      } else {
        setPhoneErrors("");
      }
    }
  };
  const checkPersonalError = () => {
    if (createPersonalMutation.isSuccess) {
      if (!createPersonalMutation.data) {
        setPersonalErrors("Personal Number is not unique");
      } else {
        setPersonalErrors("");
      }
    }
  };

  const handleChangeInput = (e: any) => {
    e.preventDefault();
    setUsers({
      ...users,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeInputDate = (date: any) => {
    const d = new Date(date).toLocaleDateString("fr-FR");
    setUsers({
      ...users,
      ["birth_date"]: d,
    });
  };
  const handleChangeError = (e: any) => {
    e.preventDefault();
    setError({
      ...errors,
      [e.target.name]: "",
    });
  };
  const handleCheckEmailIn = async (e: any) => {
    e.preventDefault();
    checkEmailError();
  };

  const handleCheckPhone = async (e: any) => {
    e.preventDefault();
    checkPhoneError();
  };
  const handleCheckPersonalIn = async (e: any) => {
    e.preventDefault();
    checkPersonalError();
  };

  const handleCreateUserSubmit = async (event: {
    preventDefault: () => void;
  }) => {
    event.preventDefault();
    const newErrors = UserValidation(users);
    setError(newErrors);
    if (
      Object.values(newErrors).filter(Boolean).length == 0 &&
      emailErrors.length == 0 &&
      phoneErrors.length == 0 &&
      personalErrors.length == 0
    ) {
      await createUserMutation.mutate(users);
    }
  };

  useEffect(() => {
    if (createUserMutation.isSuccess) setIsFormSuccess(true);
  }, [createUserMutation.isSuccess]);
  return (
    <>
      {isFormSuccess ? (
        <Succsess
          setIsFormSuccess={setIsFormSuccess}
          text={" პროფილი წარმატებით განახლდა"}
        />
      ) : (
        ""
      )}

      <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 ">
        <div className="max-w-2xl mx-auto bg-white p-5">
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600 ">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white font-['custom-1']">
              მომხმარებლის განახლება
            </h1>
          </div>
          <form onSubmit={handleCreateUserSubmit} className="font-['custom-4']">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
                >
                  {errors.name !== "" ? (
                    <span style={{ color: "red" }}>{errors.name}</span>
                  ) : (
                    "სახელი"
                  )}
                </label>
                <input
                  type="text"
                  onChange={handleChangeInput}
                  onFocus={handleChangeError}
                  name="name"
                  value={users["name"]}
                  placeholder="First Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="lname"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
                >
                  {errors.lname !== "" ? (
                    <span style={{ color: "red" }}>{errors.lname}</span>
                  ) : (
                    "გვარი"
                  )}
                </label>
                <input
                  type="text"
                  onChange={handleChangeInput}
                  onFocus={handleChangeError}
                  name="lname"
                  value={users["lname"]}
                  placeholder="Last Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="Phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
                >
                  {errors.phone !== "" ? (
                    <span style={{ color: "red" }}>{errors.phone}</span>
                  ) : phoneErrors != "" ? (
                    <span style={{ color: "red" }}>{phoneErrors}</span>
                  ) : (
                    "მობილური"
                  )}
                </label>
                <input
                  type="text"
                  value={users["phone"]}
                  name="phone"
                  onChange={handleChangeInput}
                  onFocus={handleChangeError}
                  onBlur={handleCheckPhone}
                  placeholder="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="birth_date"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
                >
                  {errors.birth_date !== "" ? (
                    <span style={{ color: "red" }}>{errors.birth_date}</span>
                  ) : (
                    "დაბადების თარიღი"
                  )}
                </label>
                <Datepicker
                  name="birth_date"
                  onSelectedDateChanged={handleChangeInputDate}
                  onClick={handleChangeError}
                  value={users["birth_date"]}
                  style={{ height: "38px" }}
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
                >
                  {errors.username !== "" ? (
                    <span style={{ color: "red" }}>{errors.username}</span>
                  ) : emailErrors != "" ? (
                    <span style={{ color: "red" }}>{emailErrors}</span>
                  ) : (
                    "იუზერნეიმი"
                  )}
                </label>
                <input
                  type="text"
                  onChange={handleChangeInput}
                  onFocus={handleChangeError}
                  onBlur={(e) => handleCheckEmailIn(e)}
                  name="username"
                  value={users["username"]}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
                >
                  {errors.email !== "" ? (
                    <span style={{ color: "red" }}>{errors.email}</span>
                  ) : emailErrors != "" ? (
                    <span style={{ color: "red" }}>{emailErrors}</span>
                  ) : (
                    "იმეილი"
                  )}
                </label>
                <input
                  type="text"
                  onChange={handleChangeInput}
                  onFocus={handleChangeError}
                  onBlur={(e) => handleCheckEmailIn(e)}
                  name="email"
                  value={users["email"]}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john@company.com"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="customer_type"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
                >
                  მომხმარებლის ტიპი
                </label>
                <select
                  name="customer_type"
                  onChange={handleChangeInput}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  defaultValue={1}
                >
                  <option value={"patent attorney"}>patent attorney</option>
                  <option value={"Physical person"}>Physical person</option>
                  <option value={"legal entity"}>legal entity</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="personal_number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
                >
                  {errors.personal_number !== "" ? (
                    <span style={{ color: "red" }}>
                      {errors.personal_number}
                    </span>
                  ) : personalErrors != "" ? (
                    <span style={{ color: "red" }}>{personalErrors}</span>
                  ) : (
                    "პირადი ნომერი"
                  )}
                </label>
                <input
                  type="text"
                  onChange={handleChangeInput}
                  onFocus={handleChangeError}
                  onBlur={handleCheckPersonalIn}
                  name="personal_number"
                  value={users["personal_number"]}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Personal number"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="adress"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
                >
                  {errors.adress !== "" ? (
                    <span style={{ color: "red" }}>{errors.adress}</span>
                  ) : (
                    "რეგისტრაციის მისამართი"
                  )}
                </label>
                <input
                  type="text"
                  onChange={handleChangeInput}
                  onFocus={handleChangeError}
                  name="adress"
                  value={users["adress"]}
                  placeholder="adress"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="adress_pact"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3"
                >
                  {errors.adress !== "" ? (
                    <span style={{ color: "red" }}>{errors.adress}</span>
                  ) : (
                    "ფაქტობრივი მისამართი"
                  )}
                </label>
                <input
                  type="text"
                  onChange={handleChangeInput}
                  onFocus={handleChangeError}
                  name="adress_pact"
                  value={users["adress_pact"]}
                  placeholder="adress line 1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4 items-center justify-center mt-4">
              <button
                type="submit"
                className="w-full p-2.5 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                განახლება
              </button>
              <Link
                to={"/dashboard"}
                className="w-full p-2.5 items-center justify-center text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
              >
                გაუქმება
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default ProfileView;
