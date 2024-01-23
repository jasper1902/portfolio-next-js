import getProjects from "@/actions/getProject";
import Banner from "./components/Banner";
import About from "./components/About";
import Skill from "./components/Skill";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center gap-20">
        <Banner />
        <About />
        <Skill />
      </div>
    </>
  );
}
