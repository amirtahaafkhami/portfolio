import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"
import About from "./components/about/About"
export default function App() {
  return (
    <div className=" text-slate-200 bg-[#131417]">
      {/*bg-[#131417]*/}
      <Navbar />
      <main className="sm:pl-[8rem] sm:pt-0 w-full main-bg">
        <Header />
        <About />
      </main>
    </div>
  )
}