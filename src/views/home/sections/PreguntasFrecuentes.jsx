const faqData = [
    {
        question: "¿Cuánto tiempo lleva desarrollar un sitio web?",
        answer: "Esto depende en gran medida de sus deseos y del alcance del trabajo. En promedio, se necesitan entre 4 y 12 semanas desde el primer contacto hasta el lanzamiento."
    },
    {
        question: "¿Cuánto cuesta un sitio web?",
        answer: "El costo de un proyecto web varía como el precio de un coche, dependiendo de varios factores. Para darte un presupuesto preciso, es fundamental conocer tu proyecto. Los precios suelen oscilar entre 5,000 y 15,000 MXN, adaptándose a cada caso. Te ofreceré una cotización a medida. Agendemos una reunión de análisis sin costo para discutir tus objetivos y cómo puedo apoyarte."
    },
    {
        question: "¿Qué incluye el precio de un sitio web?",
        answer: "El precio de un sitio web incluye el diseño, el desarrollo, la configuración del alojamiento web, la configuración del correo electrónico, la optimización para los motores de búsqueda y la capacitación para que puedas administrar tu sitio web por tu cuenta. También incluye un mes de soporte gratuito después del lanzamiento."
    },
    {
        question: "¿Qué servicios de diseño web ofreces?",
        answer: "Me especializo en el diseño y desarrollo tanto de sitios web como de aplicaciones web, adaptándome a las necesidades específicas de cada cliente. Además de crear soluciones web personalizadas y visualmente atractivas, ofrezco servicios para configurar alojamiento web, registrar dominios y establecer correos electrónicos. Si ya cuentas con un dominio o alojamiento, puedo integrar eficientemente tu nuevo proyecto web con tu infraestructura actual."
    },

    {
        question: "Ya tengo un diseño terminado. ¿Puedes implementarlo?",
        answer: "¡Claro que puedo trabajar con tu diseño ya listo! Me encargaré de darle vida a tus ideas. Además, estaré disponible para ofrecerte asesoramiento personalizado y sugerencias de optimización si así lo deseas."
    },


];

function FAQItem({question, answer}) {
    return (
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
            <div className="collapse-title text-xl font-medium p-7">{question}</div>
            <div className="collapse-content">
                <p className="px-7 pb-7">{answer}</p>
            </div>
        </div>
    );
}

export default function PreguntasFrecuentes() {
    return (
        <section className="flex flex-col justify-between items-start max-w-7xl m-auto px-8 py-32 gap-24">
            <div className="w-full flex flex-col items-center justify-center gap-4">
                <h5 className="text-5xl text-[#171717] text-center font-medium">Preguntas frecuentes</h5>
                <p className="text-xl text-[#171717] text-center font-medium">
                    Aquí encontrarás las respuestas a las preguntas más frecuentes que me hacen mis clientes.
                </p>
            </div>
            <div className="flex flex-col gap-2 w-full">
                {faqData.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer}/>
                ))}
            </div>
        </section>
    );
}
