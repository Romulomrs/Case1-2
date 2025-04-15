import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import VendingMachine from "./components/Case01/VendingMachine";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/common/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/vending-machine",
    element: <VendingMachine />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
