import React, { useEffect, useRef } from "react";

import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  // Referencia para acceder al elemento del encabezado
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // Agregar la clase 'border-b' cuando se desplaza hacia abajo
        headerRef.current.classList.remove("border-white");
      } else {
        // Eliminar la clase 'border-b' cuando está en la posición inicial
        headerRef.current.classList.add("border-white");
      }
    };

    // Agregar el eventListener al desplazarse
    window.addEventListener("scroll", handleScroll);

    // Limpiar el eventListener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <React.Fragment>
      <header
        ref={headerRef}
        className="bg-[#ffffffe2] transition-all flex h-20 w-full fixed top-0 left-0 delay-100 px-8 text-[#171717] z-50 border-b border-white max-md:hidden"
      >
        <div className="h-full w-full m-auto flex flex-row items-center justify-between backdrop-blur-sm">
          <div className="max-w-7xl m-auto flex flex-row justify-between w-full">
            <Link to="/">
              <h4 className="font-bold text-2xl">
                Noelí<span className=" text-blue-400">.</span>
              </h4>
            </Link>
            <ul className="flex flex-row gap-8 text-lg items-center max-md:hidden">
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/about">Sobre mí</Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="bg-[#171717] hover:bg-black text-white px-5 py-2 rounded-full"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className="fixed w-full z-50 items-center justify-between left-0 bottom-0 max-md:flex hidden">
        <ul className="menu menu-mobile text-xs bg-black text-[#8b8b93] w-full rounded-[0.5rem_0.5rem_0_0rem] menu-horizontal w- grid grid-cols-4 gap-1">
          <li>
            <Link
              to={"/"}
              className="flex flex-col items-center justify-center hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm9-8.586 6 6V15l.001 5H6v-9.585l6-6.001z"></path>
                <path d="M12 17c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path>
              </svg>
            </Link>
          </li>

          <li>
            <Link
              to={"/portafolio"}
              className="flex flex-col focus:text-white items-center justify-center hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current focus:text-white"
              >
                <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-5-2v2H9V4h6zM8 8h12v3H4V8h4zM4 19v-6h6v2h4v-2h6l.001 6H4z"></path>
              </svg>
            </Link>
          </li>
          <li>
            <Link
              to={"/contacto"}
              className="flex flex-col items-center justify-center hover:text-white focus:text-white active:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"></path>
                <path d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"></path>
              </svg>
            </Link>
          </li>
          <li className="">
            <Link
              to={"/about"}
              className="flex flex-col items-center justify-center whitespace-nowrap hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
              </svg>
            </Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </React.Fragment>
  );
}
