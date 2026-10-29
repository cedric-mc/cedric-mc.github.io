import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { SinglePageApp } from "./pages/SinglePageApp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <SinglePageApp /> }
    ]
  }
]);
