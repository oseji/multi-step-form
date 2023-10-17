import { Link } from "react-router-dom";

const Step3 = () => {
  return (
    <form action="" className="stepForm">
      <h1 className="formHeading">Pick add-ons</h1>
      <p className="subHeading">Add-ons help enhance your gaming experience.</p>

      <div className="addOnGrp">
        <div className="addOn">
          <div className="checkGrp">
            <input type="checkbox" name="" id="" />

            <div className="addOnText">
              <p className="addOnHeading">Online service</p>
              <p className="addOnInfo">Access to multiplayer games</p>
            </div>
          </div>

          <p className="addOnPrice">+$1/mo</p>
        </div>

        <div className="addOn">
          <div className="checkGrp">
            <input type="checkbox" name="" id="" />

            <div className="addOnText">
              <p className="addOnHeading">Larger storage</p>
              <p className="addOnInfo">Extra 1TB of cloud space</p>
            </div>
          </div>

          <p className="addOnPrice">+$2/mo</p>
        </div>

        <div className="addOn">
          <div className="checkGrp">
            <input type="checkbox" name="" id="" />

            <div className="addOnText">
              <p className="addOnHeading">Customizable profile</p>
              <p className="addOnInfo">Custom theme on your profile</p>
            </div>
          </div>

          <p className="addOnPrice">+$2/mo</p>
        </div>
      </div>

      <div className="btnGrp">
        <Link to="./Step2">
          <button className="prevBtn">Go Back</button>
        </Link>

        <Link to="./Step4">
          <button className="nextBtn">Next</button>
        </Link>
      </div>
    </form>
  );
};

export default Step3;
