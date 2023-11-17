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
        className="bg-[#ffffffe2] transition-all flex h-20 w-full fixed top-0 left-0 delay-100 px-8 text-[#171717] z-50 border-b border-white"
      >
        <div className="h-full w-full m-auto flex flex-row items-center justify-between backdrop-blur-sm">
          <div className="max-w-7xl m-auto flex flex-row justify-between w-full">
            <Link to="/">
              <h4 className="font-bold text-2xl">
                Noelí<span className=" text-blue-400">.</span>
              </h4>
            </Link>
            <ul className="flex flex-row gap-8 text-lg items-center">
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
      <Outlet />
    </React.Fragment>
  );
}
