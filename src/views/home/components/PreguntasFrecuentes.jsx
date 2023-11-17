export default function PreguntasFrecuentes() {
  return (
    <section className="flex flex-col justify-between items-start max-w-7xl m-auto px-8 pb-8">
      <div className="w-full py-14">
        <h5 className="text-center text-4xl text-[#171717] font-medium">
          Preguntas frecuentes
        </h5>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
            ¿Cuánto tiempo lleva desarrollar un sitio web?
          </div>
          <div className="collapse-content">
            <p>
              Esto depende en gran medida de sus deseos y del alcance del
              trabajo. En promedio, se necesitan entre 4 y 6 semanas desde el
              primer contacto hasta el lanzamiento.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
            ¿Cuánto cuesta mi nuevo sitio web?
          </div>
          <div className="collapse-content">
            <p>
              El costo de un proyecto web varía como el precio de un coche,
              dependiendo de varios factores. Para darte un presupuesto preciso,
              es fundamental conocer tu proyecto. Los precios suelen oscilar
              entre 5,000 y 15,000 MXN, adaptándose a cada caso. Te ofreceré una
              cotización a medida. Agendemos una reunión de análisis sin costo
              para discutir tus objetivos y cómo puedo apoyarte.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
            Ya tengo un diseño terminado. ¿Puedes implementarlo?
          </div>
          <div className="collapse-content">
            <p>
              ¡Claro que puedo trabajar con tu diseño ya listo! Me encargaré de
              darle vida a tus ideas. Además, estaré disponible para ofrecerte
              asesoramiento personalizado y sugerencias de optimización si así
              lo deseas.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
            ¿Es verdad que WordPress es obsoleto y poco eficiente?
          </div>
          <div className="collapse-content">
            <p>
              Entiendo tus preocupaciones sobre WordPress. En realidad, es una
              plataforma fantástica y siempre está actualizada gracias al
              esfuerzo de una comunidad global que la mejora constantemente. Es
              cierto que, al personalizarla con complementos, puede volverse
              lenta o inestable si no se maneja con cuidado. Pero no te
              preocupes, con mi experiencia en WordPress, me aseguro de que tu
              sitio funcione de manera eficiente y sin contratiempos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
