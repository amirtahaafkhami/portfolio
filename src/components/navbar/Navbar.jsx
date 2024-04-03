import svgs from "../../assets/svgs/svgs.svg"
import NavbarIcon from "./NavbarIcons"
export default function Navbar() {
  return (
    <nav className="flex flex-row sm:flex-col items-center sm:justify-between w-full sm:w-32 h-20 sm:h-full fixed p-5 bg-[#1D1F24] z-50">
      <div className="flex flex-row sm:flex-col justify-around w-full">
        <NavbarIcon iconName="user-circle" text="about" />
        <NavbarIcon iconName="light-bulb" text="skills" />
        <NavbarIcon iconName="trophy" text="achivements" />
        <NavbarIcon iconName="wrench-screwdriver" text="services" />
        <NavbarIcon iconName="user-group" text="team" />
        <NavbarIcon iconName="document-chart-bar" text="projects" />
        <NavbarIcon iconName="chat-bubble-left-right" text="contact" />
      </div>
      <a href="#" className="hidden sm:block lg:flex lg:items-center lg:justify-center">
        <svg className="sm:h-10 sm:w-10 text-[#676D75] hover:text-slate-300 ease-in duration-200">
          <use href={svgs + "#code-bracket"} />
        </svg>
      </a>
    </nav>
  )
}