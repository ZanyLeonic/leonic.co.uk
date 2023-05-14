import { useState } from "react";
import Footer from "./footer";
import Header from "./header";
import MainCard from "./main-card";
import { IndexContext } from "./sharedContext";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Projects from "./projects";
import Project from "./project";

function App(props: { background: any; userInfo: any }) {
  const [value, setValue] = useState<number | null>(0);
  return (
    <IndexContext.Provider value={{ value, setValue }}>
      <header>
        <Header />
      </header>
      <main>
        <div className="background-image"></div>
        <div className="flex justify-center items-center w-full h-full">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<Project />} />
          </Routes>
        </div>
      </main>
      <Footer
        author={props.background.author}
        authorURL={props.background.author_url}
        copyrightOwner={props.userInfo.name}
        photo={props.background.photo}
      />
    </IndexContext.Provider>
  );
}

export default App;
