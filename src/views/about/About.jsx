import transition from "../../transitions/transition";

function About() {
  return (
    <section className="flex flex-col w-full items-center justify-center mt-20">
      <div className="max-w-7xl m-auto my-0 px-8">
        <div className="flex flex-row justify-center items-center w-full gap-10 m-auto">
          <div className="flex flex-col items-start w-1/2 px-8 gap-4">
            <h1 className="text-5xl font-bold">
              Noelí Rodríguez<span>👋</span>
            </h1>
            <p className="text-xl">
              Desarrollador frontend en{" "}
              <span className="font-semibold">React</span>,{" "}
              <span className="font-semibold">JavaScript</span> y{" "}
              <span className="font-semibold">diseñador UX/UI</span>, apasionado
              por hacer proyectos útiles, sólidos y utilizables.
            </p>
            <a
              href=""
              className="btn bg-[#171717] h-16 px-8 rounded-2xl text-white hover:bg-black mt-4"
            >
              Contactame
            </a>
            <a
              href="#"
              className="flex flex-row text-gray-700 fill-gray-700 pt-16"
            >
              <box-icon name="mouse"></box-icon>
              <span className="pl-2">Desliza hacia abajo</span>
            </a>
          </div>
          <div>
            <div className="home-img block w-96 h-96 px-8"></div>
          </div>
        </div>
      </div>
      <AboutMeSection />
    </section>
  );
}

function AboutMeSection() {
  return (
    <div className="bg-[#171717] w-full mb-20 py-20 px-8">
      <div className="flex flex-row w-full gap-8 max-w-6xl m-auto justify-between">
        <div className="flex flex-col gap-6 text-start items-start justify-center w-3/5">
          <h5 className="text-5xl font-bold text-white text-center">
            Sobre mi
          </h5>
          <p className="text-white w-4/5">
            Soy desarrollador y diseñador web especializado en frontend con
            React y UX/UI. Realizo proyectos independientes. Autodidacta, me
            mantengo al día con las tecnologías web y en constante aprendizaje.
          </p>
          <a
            href="#"
            className="btn bg-white h-16 px-8 hover:rounded-full transition-all rounded-2xl text-[#171717]"
          >
            Descargar CV
          </a>
        </div>
        <div className="grid grid-cols-4 gap-10 bg-gradient-to-r from-[#1f1f1f] to-[#272727] p-16 rounded-2xl h-full">
          <div className="circle"></div>
          <article className="flex flex-col items-center justify-center gap-2 text-white fill-white">
            <box-icon type="logo" name="html5"></box-icon>
            <h6 className="text-white text-xl">HTML</h6>
          </article>
          <article className="flex flex-col items-center justify-center gap-2 text-white fill-white">
            <box-icon name="tailwind-css" type="logo"></box-icon>
            <h6 className="text-white text-xl">Tailwind</h6>
          </article>
          <article className="flex flex-col items-center justify-center gap-2 text-white fill-white">
            <box-icon name="javascript" type="logo"></box-icon>
            <h6 className="text-white text-xl">JavaScript</h6>
          </article>
          <article className="flex flex-col items-center justify-center gap-2 text-white fill-white">
            <box-icon name="react" type="logo"></box-icon>
            <h6 className="text-white text-xl">React</h6>
          </article>
          <article className="flex flex-col items-center justify-center gap-2 text-white fill-white">
            <box-icon name="figma" type="logo"></box-icon>
            <h6 className="text-white text-xl">Figma</h6>
          </article>
          <article className="flex flex-col items-center justify-center gap-2 text-white fill-white">
            <box-icon name="git" type="logo"></box-icon>
            <h6 className="text-white text-xl">Git</h6>
          </article>
          <article className="flex flex-col items-center justify-center gap-2 text-white fill-white">
            <box-icon name="mongodb" type="logo"></box-icon>
            <h6 className="text-white text-xl">MongoDB</h6>
          </article>
          <article className="flex flex-col items-center justify-center gap-2 text-white fill-white">
            <box-icon name="nodejs" type="logo"></box-icon>
            <h6 className="text-white text-xl">NodeJS</h6>
          </article>
        </div>
      </div>
    </div>
  );
}

const TransitionedAbout = transition(About);
export default TransitionedAbout;
