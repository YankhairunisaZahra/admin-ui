/* eslint-disable react/prop-types */
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import ErrorRoute from "./pages/errorRouter";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/dashboard";
import Balance from "./pages/balance";
import Expenses from "./pages/expences";
import TransactionPage from "./pages/transaction";
import BillsPage from "./pages/bills";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

const App = () => {
  const { isLoggedIn } = useContext(AuthContext)
  const RequireAuth = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />
  }
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <RequireAuth><Dashboard /></RequireAuth>,
      errorElement: <ErrorRoute />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
    {
      path: "/forgot",
      element: <ForgotPassword />,
    },
    {
      path: "/balance",
      element: <Balance />
    },
    {
      path: "/expenses",
      element: <Expenses />
    },
    {
      path: "/transaction",
      element: <TransactionPage />
    },
    {
      path: "/bills",
      element: <BillsPage />
    }
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;