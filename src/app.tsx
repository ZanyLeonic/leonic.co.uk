import { Route, Routes } from "react-router-dom";

import Footer from "@/components/footer";
import Header from "@/components/header";

import Home from "@/pages/home";
import Project from "@/pages/project";
import Projects from "@/pages/projects";
import NotFoundPage from "./pages/notfound";

function App(props: { background: any; userInfo: any }) {
  return (<>
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
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </main>
    <Footer
      author={props.background.author}
      authorURL={props.background.author_url}
      copyrightOwner={props.userInfo.name}
      photo={props.background.photo}
    />
  </>
  );
}

export default App;
