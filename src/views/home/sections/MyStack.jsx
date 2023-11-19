import {FigmaIcon} from "../../../assets/icons/stack/FigmaIcon.jsx";
import {JavaScriptIcon} from "../../../assets/icons/stack/JavaScriptIcon.jsx";
import {ReactIcon} from "../../../assets/icons/stack/ReactIcon.jsx";
import {TailwindIcon} from "../../../assets/icons/stack/TailwindIcon.jsx";
import {WordPressIcon} from "../../../assets/icons/stack/WordPressIcon.jsx";
import {DatabaseIcon} from "../../../assets/icons/stack/DatabaseIcon.jsx";
import {motion} from "framer-motion";

const techStack = [
    { Icon: ReactIcon, name: "React" },
    { Icon: JavaScriptIcon, name: "JavaScript" },
    { Icon: TailwindIcon, name: "TailwindCSS" },
    { Icon: FigmaIcon, name: "Figma" },
    { Icon: WordPressIcon, name: "WordPress" },
    { Icon: DatabaseIcon, name: "MySQL" },
];

const motionProps = {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0, transition: { type: "tween", duration: 0.8, ease: "easeInOut" } },
    viewport: { once: true }
};

export default function MyStack() {
    return (
        <motion.div className="card-container bg-[#171717] pt-24" {...motionProps}>
            <section className="flex flex-row justify-between items-center max-w-7xl m-auto px-8">
                <div className="flex flex-col gap-2 items-center w-full justify-center">
                    <h5 className="text-center text-5xl text-white font-medium max-md:text-3xl max-md:mb-3">
                        Tecnologías <span className=" max-md:hidden">que utilizo</span>
                    </h5>
                    <p className="text-center text-2xl text-[#686868] max-md:text-xl">
                        Estas son las tecnologías que utilizo para crear sitios web.
                    </p>
                    <GridSection/>
                </div>
            </section>
        </motion.div>
    );
}

function GridSection() {
    return (
        <div className="MyStack grid grid-cols-6 max-md:grid-cols-3 max-md:gap-3 text-[#979797] fill-[#979797] w-full justify-between text-xl py-8">
            {techStack.map((tech, index) => (
                <TechCard key={tech.name} tech={tech} delay={index * 0.2} />
            ))}
        </div>
    );
}

function TechCard({ tech, delay }) {
    return (
        <motion.div className="card-container" {...motionProps} viewport={{ ...motionProps.viewport, amount: delay }}>
            <article className="flex flex-col items-center justify-center transition-all hover:fill-white hover:text-white">
                <tech.Icon />
                <span className="max-md:text-sm">{tech.name}</span>
            </article>
        </motion.div>
    );
}
