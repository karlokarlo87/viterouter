import { PasswordChange } from "../types/UserPassValidate";

export default function UserPassValidation(values: PasswordChange) {
  const errors = {
    password: "",
    repeatpassword: "",
  };

  const passpatern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  if (values.password === "") {
    errors.password = "password is requiered !";
  } else if (!passpatern.test(values.password)) {
    errors.password =
      "password must be above 8 characters and uppercase lowwer case and number ";
  }

  if (values.password !== values.repeatpassword)
    errors.repeatpassword = "password dosnot match";
  return errors;
}
