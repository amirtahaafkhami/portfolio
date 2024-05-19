import NavbarIcon from "./NavbarIcons"
import { useState } from "react"
import svgs from "../../assets/svgs/svgs.svg"
export default function NavbarMobile() {
  let [classList, setClassList] = useState("")
  let [rotated, setRotated] = useState("h-0")
  return (
    <div className="fixed z-50 md:hidden w-32 flex flex-col pt-8 items-center h-full">
      <div className="w-16 h-16 bg-slate-300 rounded-full shadow-sm cursor-pointer flex justify-center items-center transition-all" onClick={() => {
        setClassList(classList === "" ? "rotate-[135deg]" : "");
        setRotated(rotated === "h-0" ? "h-96" : "h-0")
      }}>
        <svg className={"text-[#131417] w-10 transition-transform duration-500 " + classList}>
          <use id="id" href={svgs + "#plus"} />
        </svg>
      </div>
      <div className={"w-16 bg-slate-300 mt-4 rounded-full transition-[height] duration-500 text-[#131417] overflow-hidden " + " " + rotated}>
        <div>
          <NavbarIcon iconName="user-circle" hrefText="about" />
          <NavbarIcon iconName="light-bulb" hrefText="skills" />
          <NavbarIcon iconName="trophy" hrefText="achivements" />
          <NavbarIcon iconName="wrench-screwdriver" hrefText="services" />
          <NavbarIcon iconName="user-group" hrefText="team" />
          <NavbarIcon iconName="document-chart-bar" hrefText="projects" />
          <NavbarIcon iconName="chat-bubble-left-right" hrefText="contact" />
        </div>
      </div>
    </div>
  )
}