import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'remixicon/fonts/remixicon.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Routes/Root.jsx";
import ErrorPage from "./Error-page.jsx";
import Home, {loader as homeLoader} from "./Routes/Home.jsx";
import SelectedBook, {loader as selectedBookLoader} from "./Routes/SelectedBook.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader
      },
      {
        path: "/books/:bookId",
        element: <SelectedBook/>,
        loader: selectedBookLoader
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
