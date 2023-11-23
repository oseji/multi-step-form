import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Completed from "./Completed";

const HomePage = () => {
  const stepNumRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const routeLocation = useLocation();
  console.log(routeLocation);

  const handleStepClass = (e) => {
    const clicked = e.target;
    console.log(clicked);

    stepNumRefs.forEach((item) => {
      const step = item.current;
      //console.log(step.classList);

      step.classList.remove("stepNumberActive");
    });

    clicked.classList.toggle("stepNumberActive");
  };

  return (
    <section className="HomePage">
      <div
        className="stepsContainer
       bg-[url('./assets/bg-sidebar-mobile.svg')] 
       lg:bg-[url('./assets/bg-sidebar-desktop.svg')]"
      >
        <Link to="/">
          <div className="step">
            <div
              className="stepNumber stepNumberActive"
              ref={stepNumRefs[0]}
              onClick={handleStepClass}
            >
              1
            </div>

            <div className="stepDetails">
              <div className="stepName">Step 1</div>
              <div className="stepDesc">your info</div>
            </div>
          </div>
        </Link>

        <Link to="./Step2">
          <div className="step">
            <div
              className="stepNumber"
              ref={stepNumRefs[1]}
              onClick={handleStepClass}
            >
              2
            </div>

            <div className="stepDetails">
              <div className="stepName">Step 2</div>
              <div className="stepDesc">select plan</div>
            </div>
          </div>
        </Link>

        <Link to="./Step3">
          <div className="step">
            <div
              className="stepNumber"
              ref={stepNumRefs[2]}
              onClick={handleStepClass}
            >
              3
            </div>

            <div className="stepDetails">
              <div className="stepName">Step 3</div>
              <div className="stepDesc">add ons</div>
            </div>
          </div>
        </Link>

        <Link to="./Step4">
          <div className="step">
            <div
              className="stepNumber"
              ref={stepNumRefs[3]}
              onClick={handleStepClass}
            >
              4
            </div>

            <div className="stepDetails">
              <div className="stepName">Step 4</div>
              <div className="stepDesc">summary</div>
            </div>
          </div>
        </Link>
      </div>

      <AnimatePresence>
        <div className="formsContainer">
          <Switch location={routeLocation} key={routeLocation.key}>
            <Route exact path="/">
              <Step1></Step1>
            </Route>

            <Route path="/Step2">
              <Step2></Step2>
            </Route>

            <Route path="/Step3">
              <Step3></Step3>
            </Route>

            <Route path="/Step4">
              <Step4></Step4>
            </Route>

            <Route path="/Completed">
              <Completed></Completed>
            </Route>
          </Switch>
        </div>
      </AnimatePresence>
    </section>
  );
};

export default HomePage;
