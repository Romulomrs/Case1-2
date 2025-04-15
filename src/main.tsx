import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./common/Main";
import Vending_Machine from "./Case01";
import Elevator from "./Case02";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/vending-machine",
    element: <Vending_Machine />,
  },
  {
    path: "/elevator",
    element: <Elevator />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
