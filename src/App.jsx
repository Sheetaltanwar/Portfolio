import Navbar from "./components/Navbar"
import { Home } from "./components/Home"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/projects.jsx"
import Footer from "./components/Footer.jsx"
function App(){
  return (
    <>
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Footer/>
      </div>
    </>
  )
}
export default App