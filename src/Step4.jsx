import { Link } from "react-router-dom";

const Step4 = () => {
  return (
    <form action="" className="step4">
      <h1 className="formHeading">Finishing up</h1>
      <p className="subHeading">
        Double check everything looks OK before confirming.
      </p>

      <div className="checkoutContainer">
        <div className="checkoutHeadingGrp">
          <div>
            <p className="checkoutHeading">Arcade (Monthly)</p>

            <button className="change">Change</button>
          </div>

          <p className="headingPrice">$9/mo</p>
        </div>

        <div className="checkout pt-4">
          <p className="checkoutDetail">Online service</p>
          <p>+1$/mo</p>
        </div>

        <div className="checkout">
          <p className="checkoutDetail">Larger storage </p>
          <p>+2$/mo</p>
        </div>
      </div>

      <div className="checkoutTotalGrp">
        <p>Total (per month)</p>
        <p className="text-purplishBlue font-bold text-base">+$12/mo</p>
      </div>

      <div className="btnGrp">
        <Link to="./Step3">
          <button className="prevBtn">Go Back</button>
        </Link>

        <Link to="./Completed">
          <button className="nextBtn">Next</button>
        </Link>
      </div>
    </form>
  );
};

export default Step4;
