import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  LandingPage,
  EditTask,
  SignInPage,
  SignUpPage,
  Tasks,
} from "./pages";

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
          },
          {
            path: "signup",
            element: <SignUpPage />,
          },
        ],
      },
      {
        path: "tasks",
        element: <Tasks />,
        children: [
          {
            path: "edittask",
            element: <EditTask />,
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
