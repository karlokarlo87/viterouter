import { userValidation } from "../types/UserValidation";

export default function UserValidation(values: userValidation) {
  const errors = {
    id: "",
    name: "",
    lname: "",
    username: "",
    //password: "",
    //repeatpassword: "",
    role: "",
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
    passwort_update: "",
  };

  const emailpatern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  //const passpatern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  const phonepatern = /^\d{9}$/;
  if (values.name === "") {
    errors.name = "name is required !";
  }
  if (values.lname === "") {
    errors.lname = "last name is required !";
  }
  if (values.phone === "") {
    errors.phone = "phone is required !";
  } else if (!phonepatern.test(values.phone)) {
    errors.phone = "phone must be 9 digit number"!;
  }
  if (values.adress === "") {
    errors.adress = "adress is required !";
  }
  if (values.email === "") {
    errors.email = "email is required !";
  } else if (!emailpatern.test(values.email)) {
    errors.email = "email is not correct format"!;
  }
  if (values.birth_date === "") {
    errors.birth_date = "birth date is required !";
  }
  // if (values.password === "") {
  //   errors.password = "password is requiered !";
  // } else if (!passpatern.test(values.password)) {
  //   errors.password =
  //     "password must be above 8 characters and uppercase lowwer case and number ";
  // }

  // if (values.password !== values.repeatpassword)
  //   errors.repeatpassword = "password dosnot match";
  return errors;
}
