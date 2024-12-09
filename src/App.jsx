import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import ErrorRoute from "./pages/errorRouter";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/dashboard";
import Balance from "./pages/balance";
import Expenses from "./pages/expences";

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
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
    }
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;