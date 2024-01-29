import { LlamadaIcon } from "../../../assets/icons/contactme/LlamadaIcon.jsx";
import { MailIcon } from "../../../assets/icons/contactme/MailIcon.jsx";

function ContactCard({ Icon, text, link }) {
  return (
    <a
      href={link}
      className="bg-[#171717] max-md:bg-[#171717] hover:bg-black transition-all text-white fill-white text-xl font-semibold p-10 max-md:p-6 rounded-2xl flex flex-row items-center gap-4"
    >
      <Icon />
      <h6 className=" max-md:text-base">{text}</h6>
    </a>
  );
}

export default function ContactMe() {
  return (
    <section className="bg-white py-32 px-8">
      <div className="flex flex-row w-full max-w-7xl m-auto gap-8 max-lg:flex-col">
        <div className="w-1/2 max-lg:w-full flex flex-col gap-2">
          <h5 className="text-start text-4xl text-[#171717] font-semibold">
            Comunicate conmigo
          </h5>
          <p className="text-start text-xl text-[#171717] font-medium flex flex-col gap-6 py-4">
            <span>
              Si tienes alguna duda o quieres saber más sobre mi trabajo, no
              dudes en contactarme.
            </span>
          </p>
        </div>
        <div className="w-1/2 max-lg:w-full flex flex-col gap-4 p-4 max-md:p-0">
          <ContactCard
            Icon={LlamadaIcon}
            text="Realiza una llamada"
            link={"tel:9981725547"}
          />
          <ContactCard
            Icon={MailIcon}
            text="Contáctame por correo"
            link={"mailto:noer.morales98@gmail.com"}
          />
        </div>
      </div>
    </section>
  );
}
