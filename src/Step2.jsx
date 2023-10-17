import { Link } from "react-router-dom";
import cardArcade from "./assets/icon-arcade.svg";
import cardAdvanced from "./assets/icon-advanced.svg";
import cardIPro from "./assets/icon-pro.svg";

const Step2 = () => {
  return (
    <form action="" className="stepForm">
      <h1 className="formHeading">Select your plan</h1>
      <p className="subHeading">
        You have the option of monthly or yearly billing.
      </p>

      <div className="cardGrp">
        <div className="cardContainer">
          <img src={cardArcade} alt="Arcade Card" className="cardImg" />

          <div>
            <p className="cardName">Arcade</p>
            <p className="cardPrice">$9/mo</p>
          </div>
        </div>

        <div className="cardContainer">
          <img src={cardAdvanced} alt="Advanced Card" className="cardImg" />

          <div>
            <p className="cardName">Advanced</p>
            <p className="cardPrice">$12/mo</p>
          </div>
        </div>

        <div className="cardContainer">
          <img src={cardIPro} alt="Pro Card" className="cardImg" />

          <div>
            <p className="cardName">Pro</p>
            <p className="cardPrice">$15/mo</p>
          </div>
        </div>
      </div>

      <div className="monthlyYearlyGrp">
        <p className="monthlyYearlyText MYtextActive">Monthly</p>
        <div className="slider">
          <div className="dot"></div>
        </div>
        <p className="monthlyYearlyText">Yearly</p>
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
