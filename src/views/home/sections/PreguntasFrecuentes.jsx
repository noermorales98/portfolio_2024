export default function PreguntasFrecuentes() {
  return (
    <section className="flex flex-col justify-between items-start max-w-7xl m-auto px-8 py-32 gap-24">
      <div className="w-full">
        <div className="flex flex-col items-center justify-center gap-4">
          <h5 className="text-5xl text-[#171717] text-center font-medium">
            Preguntas frecuentes
          </h5>
          <p className="text-xl text-[#171717] text-center font-medium">
            Aquí encontrarás las respuestas a las preguntas más frecuentes que
            me hacen mis clientes.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium p-7">
            ¿Cuánto tiempo lleva desarrollar un sitio web?
          </div>
          <div className="collapse-content">
            <p className="px-7 pb-7">
              Esto depende en gran medida de sus deseos y del alcance del
              trabajo. En promedio, se necesitan entre 4 y 12 semanas desde el
              primer contacto hasta el lanzamiento.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium p-7">
            ¿Cuánto cuesta mi nuevo sitio web?
          </div>
          <div className="collapse-content">
            <p className="px-7 pb-7">
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
          <div className="collapse-title text-xl font-medium p-7">
            Ya tengo un diseño terminado. ¿Puedes implementarlo?
          </div>
          <div className="collapse-content">
            <p className="px-7 pb-7">
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
          <div className="collapse-title text-xl font-medium p-7">
            ¿Es verdad que WordPress es obsoleto y poco eficiente?
          </div>
          <div className="collapse-content">
            <p className="px-7 pb-7">
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
