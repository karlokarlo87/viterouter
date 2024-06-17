const UserFormInput = ({
  errors,
  handleChangeInput,
  emailvalue,
  users,
  handleCheckEmail,
  emailErrors,
}) => {
  const handleCheckEmailIn = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.value,
      id: users.id,
    };
    handleCheckEmail(data);
  };
  return (
    <>
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
            "email"
          )}
        </label>
        <input
          type="text"
          onChange={handleChangeInput}
          onBlur={(e) => handleCheckEmailIn(e)}
          name="email"
          value={emailvalue}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="john@company.com"
        />
      </div>
    </>
  );
};

export default UserFormInput;
