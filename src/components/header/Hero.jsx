import { TypeAnimation } from "react-type-animation";
export default function Hero() {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center hero-bg"> 
    {/* hero-bg */}
      <div className="w-full h-full flex flex-col justify-center items-center md:mt-0">
        <h1 className="text-4xl md:text-5xl lg:text-7xl">I am Amirtaha Afkhami</h1>
        <br />
        <h1 className="text-2xl md:text-3xl lg:text-4xl">I am a
          <span>
            <TypeAnimation sequence={[
              " web designer",
              1500,
              " programming teacher",
              1500,
              " web developer",
              1500,
              " team manager",
              1500]}
              wrapper="span"
              speed={50}
              repeat={Infinity} />
          </span>
          !</h1>
      </div>
    </div>
  )
}