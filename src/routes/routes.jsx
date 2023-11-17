import { Link, createBrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Index from "../views/home/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
    ],
  },
  {
    path: "*",
    element: <Navbar />,
    children: [
      {
        path: "*",
        element: (
          <section className="flex flex-col items-center gap-2 justify-center h-screen">
            <h1 className="text-5xl text-[#171717] font-medium">
              404: Página no encontrada
            </h1>
            <Link to="/" className="text-xl text-blue-800">
              Regresar al inicio
            </Link>
          </section>
        ),
      },
    ],
  }
]);

export default router;
