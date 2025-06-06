import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthLogin from "./components/auth/AuthLogin.tsx";
import AuthResset from "./components/auth/AuthResset.tsx";
import AuthSendEmail from "./components/auth/AuthSendEmail.tsx";
import AuthEmailSuccsess from "./components/auth/AuthEmailSuccsess.tsx";

import Users from "./components/users/Users.tsx";
import UsersList from "./components/users/UsersList.tsx";
import UserCreate from "./components/users/UserCreate.tsx";
import UsersView from "./components/users/UsersView.tsx";
import Layout from "./components/shared/layout.tsx";
import Dashboard from "./components/Dashboard.tsx";
import Products from "./components/Products.tsx";
import Orders from "./components/Orders.tsx";
import Order from "./components/Order.tsx";
import Customers from "./components/Customers.tsx";
import Customer from "./components/Customer.tsx";
import Product from "./components/Product.tsx";
import Categories from "./components/cat/Categories.tsx";
import NotFound from "./components/notfound/NotFound.tsx";
import ProtectedRoute from "./functions/protected.tsx";
import ProfileView from "./components/profile/ProfileView";
import PasswordChange from "./components/profile/PasswordChange";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="product" element={<Product />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="order" element={<Order />} />
            <Route path="customers" element={<Customers />} />
            <Route path="customer" element={<Customer />} />
            <Route path="categories" element={<Categories />} />
            <Route path="users">
              <Route
                path="limit/:from/"
                element={
                  <ProtectedRoute>
                    <UsersList />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":id"
                element={
                  <ProtectedRoute>
                    <Users />
                  </ProtectedRoute>
                }
              />
              <Route
                path="create"
                element={
                  <ProtectedRoute>
                    <UserCreate />
                  </ProtectedRoute>
                }
              />
              <Route
                path="view/:id"
                element={
                  <ProtectedRoute>
                    <UsersView />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route
              path="profile"
              element={
                <ProtectedRoute>
                  <ProfileView />
                </ProtectedRoute>
              }
            />
            <Route
              path="passwordchange"
              element={
                <ProtectedRoute>
                  <PasswordChange />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="auth">
            <Route path="login" element={<AuthLogin />} />
            <Route path="updatePassword/:tocken?" element={<AuthResset />} />
            <Route path="sendemail" element={<AuthSendEmail />} />
            <Route path="EmailSuccsess" element={<AuthEmailSuccsess />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
