import Banner from "./components/Banner";
import About from "./components/About";
import Skill from "./components/Skill";
import ProjectIndex from "./components/project/ProjectIndex";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center gap-20">
        <Banner />
        <About />
        <Skill />
        <ProjectIndex />
        <Footer />
      </div>
    </>
  );
}
