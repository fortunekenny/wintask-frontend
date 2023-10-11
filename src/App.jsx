import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  LandingPage,
  EditTask,
  SignInPage,
  SignUpPage,
  Tasks,
  CreateTask,
  UserPage,
  Admin,
} from "./pages";

import { action as signupAction } from "./pages/SignUpPage";
import { action as signinAction } from "./pages/SignInPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
        children: [
          {
            path: "signin",
            element: <SignInPage />,
            action: signinAction,
          },
          {
            path: "signup",
            element: <SignUpPage />,
            action: signupAction,
          },
        ],
      },
      {
        path: "userpage",
        element: <UserPage />,
        children: [
          {
            index: true,
            element: <CreateTask />,
          },
          {
            path: "tasks",
            element: <Tasks />,
          },
          {
            path: "edittask",
            element: <EditTask />,
          },
          {
            path: "admin",
            element: <Admin />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
