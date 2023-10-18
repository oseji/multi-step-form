import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import cardArcade from "./assets/icon-arcade.svg";
import cardAdvanced from "./assets/icon-advanced.svg";
import cardIPro from "./assets/icon-pro.svg";

const Step2 = () => {
  const cardContainerRefs = [useRef(null), useRef(null), useRef(null)];
  const dotRef = useRef(null);
  const sliderText = [useRef(null), useRef(null)];

  const [sliderToggle, setSliderToggle] = useState(false);

  const [plan, setPlan] = useState("");
  const [planPrice, setPlanPrice] = useState(0);

  useEffect(() => {
    console.log(plan, planPrice);
  }, [plan, planPrice]);

  const [arcadePrice, setArcadePrice] = useState(9);
  const [advancedPrice, setAdvancedPrice] = useState(12);
  const [proPrice, setProPrice] = useState(15);

  const [arcadePriceText, setArcadePriceText] = useState("$9/mo");
  const [advancedPriceText, setAdvancedPriceText] = useState("$12/mo");
  const [proPriceText, setProPriceText] = useState("$15/mo");

  //console.log(cardContainerRefs);

  const handlePriceChange = (e) => {
    const dot = dotRef.current;

    dot.classList.toggle("dotTransition");

    //if slider is true then set to false and if false then it sets to true
    setSliderToggle(!sliderToggle);
    if (!sliderToggle) {
      setArcadePriceText("$90/yr");
      setArcadePrice(90);

      setAdvancedPriceText("$120/yr");
      setAdvancedPrice(120);

      setProPriceText("$150/yr");
      setProPrice(150);
    } else {
      setArcadePriceText("$9/mo");
      setArcadePrice(9);

      setAdvancedPriceText("$12/mo");
      setAdvancedPrice(12);

      setProPriceText("$15/mo");
      setProPrice(15);
    }

    sliderText.forEach((item) => {
      const text = item.current;
      text.classList.toggle("MYtextActive");
    });

    console.log(arcadePrice, advancedPrice, proPrice);
  };

  const handlePlanSelection = (e) => {
    //console.log(e, e.target.id, e.target.dataset.price);

    setPlan(e.target.id);
    setPlanPrice(Number(e.target.dataset.price));
  };

  return (
    <form action="" className="stepForm">
      <h1 className="formHeading">Select your plan</h1>
      <p className="subHeading">
        You have the option of monthly or yearly billing.
      </p>

      <div className="cardGrp">
        <div
          className="cardContainer"
          id="Arcade"
          data-price={arcadePrice}
          ref={cardContainerRefs[0]}
          onClick={handlePlanSelection}
        >
          <img src={cardArcade} alt="Arcade Card" className="cardImg" />

          <div>
            <p className="cardName">Arcade</p>
            <p className="cardPrice">{arcadePriceText}</p>
          </div>
        </div>

        <div
          className="cardContainer"
          id="Advanced"
          data-price={advancedPrice}
          ref={cardContainerRefs[1]}
          onClick={handlePlanSelection}
        >
          <img src={cardAdvanced} alt="Advanced Card" className="cardImg" />

          <div>
            <p className="cardName">Advanced</p>
            <p className="cardPrice">{advancedPriceText}</p>
          </div>
        </div>

        <div
          className="cardContainer"
          id="Pro"
          data-price={proPrice}
          ref={cardContainerRefs[2]}
          onClick={handlePlanSelection}
        >
          <img src={cardIPro} alt="Pro Card" className="cardImg" />

          <div>
            <p className="cardName">Pro</p>
            <p className="cardPrice">{proPriceText}</p>
          </div>
        </div>
      </div>

      <div className="monthlyYearlyGrp">
        <p className="monthlyYearlyText MYtextActive" ref={sliderText[0]}>
          Monthly
        </p>
        <div className="slider" onClick={handlePriceChange}>
          <div className="dot" ref={dotRef}></div>
        </div>
        <p className="monthlyYearlyText" ref={sliderText[1]}>
          Yearly
        </p>
      </div>

      <div className="btnGrp">
        <Link to="/">
          <button className="prevBtn">Go Back</button>
        </Link>

        <Link to="./Step3">
          <button className="nextBtn">Next</button>
        </Link>
      </div>
    </form>
  );
};

export default Step2;
