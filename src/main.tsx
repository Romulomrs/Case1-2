import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import VendingMachine from "./components/VendingMachine";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:'/',
    element:<TelaInicial/>,
  },
    {
      path: '/vending-machine',
      element: <VendingMachine />,
    },
  ]);


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
