import transition from "../../../transitions/transition";
import { useParams } from "react-router-dom";
import { proyectos } from "../../../data/proyectos";
import PropTypes from "prop-types";
import { useState } from "react";

function CarouselItem({ src, onNext, onPrev }) {
  return (
    <div className="carousel-item relative w-full">
      <img src={`../${src}`} className="w-full rounded-3xl" alt="name" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <button onClick={onPrev} className="btn btn-circle">
          ❮
        </button>
        <button onClick={onNext} className="btn btn-circle">
          ❯
        </button>
      </div>
    </div>
  );
}

function Carousel({ indice }) {
  const slides = proyectos[indice].images;
  const [step, setStep] = useState(0);

  const mod = (n, m) => ((n % m) + m) % m; // Modulo function for negative numbers

  return (
    <div className="carousel w-full">
      <CarouselItem
        onNext={() => setStep(mod(step + 1, slides.length))}
        onPrev={() => setStep(mod(step - 1, slides.length))}
        src={slides[step].src}
      />
    </div>
  );
}

Carousel.propTypes = {
  indice: PropTypes.number.isRequired,
};

function Proyecto() {
  const { code } = useParams();
  const indice = proyectos.findIndex((proyecto) => proyecto.code === code);
  const dato = proyectos[indice] || {}; // Asegura que dato no sea undefined

  return (
    <section className="flex flex-col w-full items-center justify-center mt-20 max-lg:mt-32 max-md:mt-0">
      <div className="w-full hidden max-md:flex flex-row justify-start gap-8 items-start max-w-7xl px-8 py-8 m-auto">
        <button>
          <box-icon name="arrow-back"></box-icon>
        </button>
      </div>
      <div className="w-full flex flex-row justify-start gap-10 items-start max-w-7xl px-8 pt-4 pb-20 m-auto">
        <div className="w-1/2">
          <Carousel indice={indice} />
        </div>
        <div className="w-1/2">
          {/* Información del proyecto */}
          <h1 className="text-5xl font-bold max-lg:text-center max-md:text-3xl">
            {dato.title}
          </h1>
          <p className="text-xl max-md:text-base mt-2">{dato.description}</p>
          {/* ... */}
        </div>
      </div>
    </section>
  );
}

const TransitionedProyecto = transition(Proyecto);
export default TransitionedProyecto;

CarouselItem.propTypes = {
  src: PropTypes.string.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};
