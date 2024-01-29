import transition from "../../transitions/transition";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const ContactInfo = ({ href, text, secondaryText }) => (
  <article className="flex flex-col items-start justify-center gap-4 w-full">
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex flex-row items-center justify-between px-5 py-6 gap-8 border rounded-2xl w-[90%] max-lg:w-full bg-[#f5f5f7] hover:shadow-sm transition-all"
    >
      <p className="flex flex-col">
        <span className="text-sm max-md:text-xs">{text}</span>
        <span className="text-black text-base max-md:text-sm break-words">{secondaryText}</span>
      </p>
      <span className="border border-gray-300 bg-white rounded-xl flex items-center justify-center p-2 max-[358px]:hidden">
        <box-icon name="right-arrow-alt"></box-icon>
      </span>
    </a>
  </article>
);

const SocialLink = ({ href, bgColor, hoverColor, iconName, title }) => (
  <article className="flex flex-col items-start justify-center gap-4">
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`flex flex-row items-center justify-center gap-2 ${bgColor} ${hoverColor} text-white px-4 py-2 rounded-full`}
    >
      <box-icon type="logo" name={iconName} color="white"></box-icon>
      {title}
    </a>
  </article>
);

function Contacto() {
  return (
    <>
      <Helmet>
        <title>Contacto - Noelí Rodríguez</title>
        <meta
          name="description"
          content="Ponte en contacto conmigo, desarrollador web. Si tienes alguna consulta, no dudes en comunicarte."
        />
      </Helmet>
      <section className="flex flex-col w-full items-center justify-center mt-20 pt-8 max-lg:mt-32 max-md:mt-0">
        <div className="w-full flex flex-row max-lg:flex-col justify-start gap-10 items-start max-w-6xl px-8 pt-4 pb-20 m-auto">
          <div className="w-1/2 max-lg:w-full flex flex-col gap-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 max-lg:text-center">
                Contacto
              </h1>
              <p className="text-gray-700 text-xl mt-4 max-lg:text-center">
                Si quieres contactarme, puedes hacerlo a través de mis redes
                sociales o en los siguientes enlaces.
              </p>
            </div>
            <div className="flex flex-row gap-1 flex-wrap items-center max-lg:justify-center">
              <SocialLink
                href="https://www.linkedin.com/in/noermorales/"
                bgColor="bg-gray-600"
                hoverColor="hover:bg-gray-800"
                iconName="linkedin"
                title={"LinkedIn"}
              />
              <SocialLink
                href="https://www.instagram.com/noermorales/"
                bgColor="bg-gray-600"
                hoverColor="hover:bg-gray-800"
                iconName="instagram"
                title={"Instagram"}
              />
              <SocialLink
                href="https://www.github.com/noermorales98"
                bgColor="bg-gray-600"
                hoverColor="hover:bg-gray-800"
                iconName="github"
                title={"GitHub"}
              />

              <SocialLink
                href="https://www.dribbble.com/noermorales98"
                bgColor="bg-gray-600"
                hoverColor="hover:bg-gray-800"
                iconName="dribbble"
                title={"Dribbble"}
              />
            </div>
          </div>
          <div className="w-1/2 max-lg:w-full flex flex-col gap-2">
            <div className="flex flex-col gap-2 w-full">
              <ContactInfo
                href="mailto:noe.rmorales98@gmail.com"
                text="Envíame un correo"
                secondaryText="noe.rmorales98@gmail.com"
              />
              <ContactInfo
                href="tel:9981725547"
                text="Hazme una llamada"
                secondaryText="(998) 172 55 47"
              />
              <ContactInfo
                href="https://api.whatsapp.com/send/?phone=9981725547&text=Hola%20Noe.%20Te%20contacto%20desde%20tu%20portafolio%20web."
                text="Envíame un mensaje"
                secondaryText="(998) 172 55 47"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

ContactInfo.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
};
SocialLink.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  hoverColor: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};

const TransitionedContacto = transition(Contacto);
export default TransitionedContacto;
