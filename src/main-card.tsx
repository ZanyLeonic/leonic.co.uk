import Home from "./home";
import Projects from "./projects";

import "./sass/main-card.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function MainCard() {
  const location = useLocation();

  return (
    <div className="card hoverable white-text max-w-xl w-full">
      <TransitionGroup component={null}>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={300}
          mountOnEnter={false}
          unmountOnExit={true}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default MainCard;
