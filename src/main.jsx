import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "remixicon/fonts/remixicon.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Routes/Root.jsx";
import ErrorPage from "./Error-page.jsx";
import Home, { loader as homeLoader } from "./Routes/Home.jsx";
import SelectedBook, {
  loader as selectedBookLoader,
} from "./Routes/SelectedBook.jsx";
import Authors, { loader as authorLoader } from "./Routes/Authors.jsx";
import SignUp from "./Routes/SignUp.jsx";
import Login from "./Routes/Login.jsx";
import store from "./app/store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "/author",
        element: <Authors />,
        loader: authorLoader,
      },
      {
        path: "/books/:bookId",
        element: <SelectedBook />,
        loader: selectedBookLoader,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
