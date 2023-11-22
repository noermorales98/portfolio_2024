import PropTypes from "prop-types";
import { useState } from "react";

export default function StoryLine() {
  const [toggle, setToggle] = useState(false);

  const estudios = [
    {
      title: "T.S.U en TICS",
      date: "2020 - 2022",
      description:
        "Estudié Técnico Superior Universitario en Tecnologías de la Información y Comunicación en la Universidad Tecnológica de Cancún.",
    },
    {
      title: "Curso JavaScript desde cero",
      date: "2023",
      description:
        "Quize profundizar más en el lenguaje de programación JavaScript, por lo que decidí estudiar en linea y comprar libros para aprender más sobre el tema.",
    },
    {
      title: "Curso de React.js",
      date: "2023",
      description:
        "Decidí aprender React.js para poder crear aplicaciones web más complejas, por lo que tomé un curso en EDteam.",
    },
    {
      title: "Ing. Desarrollo de Software",
      date: "2022 - 2024",
      description:
        "Seguí con mis estudios para ser Ingeniero en Desarrollo de Software en la Universidad Tecnológica de Cancún.",
    },
    {
      title: "Desarrollo Web",
      date: "actualidad",
      description:
        "Me gusta aprender y mejorar mis habilidades como desarrollador web, por lo que sigo aprendiendo y practicando de forma autodidacta, comprando libros, cursos, etc.",
    },
  ];

  const experiencias = [
    {
      title: "Becario en Desarrollo Web",
      date: "abril 2022",
      description:
        "Inicié mi carrera profesional como becario en Neo E Marketing. Tuve la oportunidad de trabajar en proyectos reales y aprender de mis compañeros. Mi mas grande logro fue crear un sitio web para un restaurante de comida mexicana con ubicación en Dubai.",
    },
    {
      title: "Desarrollador Frontend (Freelancer)",
      date: "mar. 2023 - may. 2023",
      description:
        "Después de mis estadías, decidí trabajar como Freelancer para una firma de hotelería en Cancún, junto a un amigo. Creamos un sistema de control de temperatura que detecta la humedad y temperatura del ambiente, enviando los datos a una base de datos en tiempo real.",
    },
    {
      title: "Desarrollador Web FullStack",
      date: "mar. 2023 - dic. 2023",
      description:
        "Regresé a Neo E Marketing como desarrollador web fullstack para proyectos más grandes. En esta etapa, lideré el desarrollo de un sitio web avanzado, creando una API propia para la consulta de datos y utilizando SAP Business One como sistema de base de datos, optimizando la gestión de la información.",
    },
    {
      title: "Desarrollador Frontend (Freelancer)",
      date: "nov. 2023 - may. 2024",
      description:
        "Trabajé como Freelancer desarrollando un sistema de control de facturas para una agencia de viajes en Cancún, diseñado específicamente para satisfacer las necesidades del contralor de la empresa.",
    },
    {
      title: "Desarrollador Web",
      date: "nov. 2023 - actualidad",
      description:
        "Actualmente ofrezco mis servicios como desarrollador web. Me gusta trabajar con tecnologías como React.js, Next.js, Node.js, MongoDB, WordPress, etc. He trabajado en proyectos de todo tipo, desde sitios web hasta aplicaciones web complejas.",
    },
  ];

  return (
    <section className="py-20 max-w-5xl m-auto">
      <h5 className="text-[#171717] text-5xl font-bold text-center max-md:text-xl pb-8">
        Preparación
      </h5>
      <div>
        <div className="flex items-center justify-center gap-4">
        <button
            onClick={() => {
              setToggle(false);
            }}
            className={
              !toggle
                ? "font-bold py-2 px-4 rounded flex items-center gap-2"
                : "font-bold fill-gray-500 text-gray-500 py-2 px-4 rounded flex items-center gap-2"
            }
          >
            <box-icon type="solid" name="briefcase-alt-2"></box-icon>
            Experiencia
          </button>
          <button
            onClick={() => {
              setToggle(true);
            }}
            className={
              toggle
                ? "font-bold py-2 px-4 rounded flex items-center gap-2"
                : "font-bold fill-gray-500 text-gray-500 py-2 px-4 rounded flex items-center gap-2"
            }
          >
            <box-icon type="solid" name="graduation"></box-icon>
            Estudios
          </button>
          
        </div>
      </div>
      <div className="w-full flex items-center justify-center pt-10 max-md:px-2">
        {toggle ? (
          <TimeLine datos={estudios} />
        ) : (
          <TimeLine datos={experiencias} />
        )}
      </div>
    </section>
  );
}

function TimeLine({ datos }) {
  return (
    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#757575] before:to-transparent">
      {datos.map((item, index) => (
        <TimeLineItem key={index} {...item} />
      ))}
    </div>
  );
}

function TimeLineItem({ title, date, description }) {
  return (
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
      <div className="flex items-center justify-center w-4 h-4 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#757575] fill-[#757575] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-[200%] md:group-even:translate-x-[200%] max-md:translate-x-3">
        <box-icon type="solid" name="circle"></box-icon>
      </div>
      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white px-4">
        <div className="flex items-center justify-between space-x-2 mb-1">
          <div className="text-black font-medium">{title}</div>
        </div>
        <div className="text-[#757575]">{description}</div>
        <time className="font-caveat text-xs flex items-center gap-2 fill-[#757575] text-[#757575]">
          <div className="mt-1">
            <box-icon name="calendar" size="xs"></box-icon>
          </div>
          <div className="">{date}</div>
        </time>
      </div>
    </div>
  );
}

TimeLineItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
