import { InstagramIcon } from "../../assets/icons/social/InstagramIcon.jsx";
import { LinkedInIcon } from "../../assets/icons/social/LinkedInIcon.jsx";
import { MessengerIcon } from "../../assets/icons/social/MessengerIcon.jsx";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Footer() {
  const pages = [
    { href: "/", text: "Inicio" },
    { href: "/about", text: "Sobre mi" },
    { href: "/portafolio", text: "Portafolio" },
    { href: "/contacto", text: "Contacto" },
  ];

  const services = [
    { href: "#", text: "Diseño web" },
    { href: "#", text: "Desarrollo web" },
    { href: "#", text: "Mantenimiento web" },
  ];

  const contactInfo = [
    { href: "tel:9981725547", text: "Teléfono" },
    { href: "mailto:noe.rmorales98@gmail.com", text: "Correo electrónico" },
    {
      href: "https://www.linkedin.com/in/noermorales/",
      text: "LinkedIn",
      isExternal: true,
    },
  ];

  const socialLinks = [
    { href: "https://www.instagram.com/noermorales/", Icon: InstagramIcon },
    { href: "https://www.linkedin.com/in/noermorales/", Icon: LinkedInIcon },
    { href: "https://m.me/neormorales98", Icon: MessengerIcon },
  ];

  return (
    <footer className="w-full text-[#171717] text-center py-8 max-w-7xl m-auto px-8">
      <div className="grid grid-cols-5 max-lg:grid-cols-3 py-8 border-b">
        <LinkList title="Páginas" links={pages} />
        <LinkList title="Servicios" links={services} />
        <LinkList title="Contacto" links={contactInfo} />
        <div className="col-span-2 px-10 flex items-center justify-start max-lg:hidden">
          <span className="footerbg bg-gray-700 px-16 py-16 rounded-xl w-full h-full flex items-center justify-start">
            <h5 className="text-3xl font-bold text-white text-start">
              Construye tu <br /> marca en línea
            </h5>
          </span>
        </div>
      </div>
      <div className="font-semibold pt-8 flex flex-row justify-between items-center">
        <span className="text-gray-600">
          © 2023 - Todos los derechos reservados
        </span>
        <ul className="flex flex-row gap-2">
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} Icon={link.Icon} />
          ))}
        </ul>
      </div>
    </footer>
  );
}

function LinkList({ title, links }) {
  return (
    <div className="flex flex-col items-start gap-6">
      <h5 className="text-base font-semibold uppercase text-gray-600">
        {title}
      </h5>
      <ul className="flex flex-col gap-2 items-start">
        {links.map((link, index) => (
          <li key={index} className="text-base font-medium">
            {link.href === "#" ? (
              <span>{link.text}</span>
            ) : link.isExternal ? (
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.text}
              </a>
            ) : (
              <Link to={link.href}>{link.text}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ href, Icon }) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="border p-2 rounded-full border-gray-300 fill-gray-600 inline-block"
      >
        <Icon />
      </a>
    </li>
  );
}

SocialIcon.propTypes = {
  href: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
};

LinkList.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      isExternal: PropTypes.bool,
    })
  ).isRequired,
};
