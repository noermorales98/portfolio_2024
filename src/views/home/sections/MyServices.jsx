import { motion } from "framer-motion";

const techStack = [
  { Icon: "code-alt", name: "Desarrollo Web" },
  { Icon: "paint", name: "Diseño UX/UI" },
  { Icon: "pointer", name: "Aplicaciones Web" },
  { Icon: "server", name: "Hosting Web" },
  { Icon: "analyse", name: "Optimización SEO" },
];

const motionProps = {
  initial: { opacity: 0, y: 100 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", duration: 0.8, ease: "easeInOut" },
  },
  viewport: { once: true },
};

export default function MyServices() {
  return (
    <motion.div
      className="card-container bg-[#171717] py-24 max-md:py-14 "
      {...motionProps}
    >
      <section className="flex flex-row justify-between items-center max-w-7xl m-auto px-8">
        <div className="flex flex-col gap-4 items-center w-full justify-center">
          <h5 className="text-center text-5xl text-white font-medium max-md:text-3xl max-md:mb-3">
            Servicios <span className=" max-md:hidden">que ofrezco</span>
          </h5>
          <p className="text-center text-2xl text-[#686868] max-md:text-base">
            Estos son algunos de los servicios que ofrezco, si tienes alguna{" "}
            <br className="max-md:hidden" />
            duda o necesitas algo que no esté aquí, no dudes en contactarme.
          </p>
          <GridSection />
        </div>
      </section>
    </motion.div>
  );
}

function GridSection() {
  return (
    <div className="MyStack grid grid-cols-5 items-cente mt-4 justify-center max-md:gap-5 text-[#979797] fill-[#979797] w-full text-xl py-8">
      {techStack.map((tech, index) => (
        <TechCard key={tech.name} tech={tech} delay={index * 0.2} />
      ))}
    </div>
  );
}

function TechCard({ tech, delay }) {
  return (
    <motion.div
      className="card-container"
      {...motionProps}
      viewport={{ ...motionProps.viewport, amount: delay }}
    >
      <article className="flex flex-col text-center items-center justify-start transition-all hover:fill-white hover:text-white">
        <div className="hidden max-md:block">
          <box-icon name={tech.Icon}></box-icon>
        </div>
        <div className="max-md:hidden">
          <box-icon name={tech.Icon} size="lg"></box-icon>
        </div>
        <span className="max-md:text-xs">{tech.name}</span>
      </article>
    </motion.div>
  );
}
