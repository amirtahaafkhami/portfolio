import svgs from "../../assets/svgs/svgs.svg"
import NavbarIcon from "./NavbarIcons"
import NavbarMobile from "./NavbarMobile"
export default function Navbar() {
  return (
    <>
      <nav className="hidden md:flex flex-row md:flex-col items-center md:justify-between w-full md:w-32 h-20 md:h-full fixed p-5 bg-[#1D1F24] z-50">
        <div className="flex flex-row sm:flex-col justify-around w-full">
          <NavbarIcon iconName="user-circle" text="about" hrefText="about" />
          <NavbarIcon iconName="light-bulb" text="skills" hrefText="skills" />
          <NavbarIcon iconName="trophy" text="achivements" hrefText="achivements" />
          <NavbarIcon iconName="wrench-screwdriver" text="services" hrefText="services" />
          <NavbarIcon iconName="user-group" text="team" hrefText="team" />
          <NavbarIcon iconName="document-chart-bar" text="projects" hrefText="projects" />
          <NavbarIcon iconName="chat-bubble-left-right" text="contact" hrefText="contact" />
        </div>
        <a href="#" className="hidden sm:block lg:flex lg:items-center lg:justify-center">
          <svg className="sm:h-10 sm:w-10 text-[#676D75] hover:text-slate-300 ease-in duration-200">
            <use href={svgs + "#code-bracket"} />
          </svg>
        </a>
      </nav>
      <NavbarMobile />
    </>
  )
}