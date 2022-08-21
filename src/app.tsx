import { useState } from "react";
import Footer from "./footer";
import Header from "./header";
import MainCard from "./main-card";
import { IndexContext } from "./sharedContext";

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
          <MainCard />
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
