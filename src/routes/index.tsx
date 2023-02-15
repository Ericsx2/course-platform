import { createBrowserRouter } from "react-router-dom";

import {
  Courses,
  ErrorPage,
  Home,
  Layout,
  Login,
  Profile,
  Reader,
  Register,
  Support,
} from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "courses", element: <Courses /> },
      { path: "courses/:id", element: <Reader /> },
      { path: "profile", element: <Profile /> },
      { path: "support", element: <Support /> },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/register", element: <Register /> },
]);

export { router };
