import thankYou from "./assets/icon-thank-you.svg";

const Completed = () => {
  return (
    <div className="completedPage">
      <img src={thankYou} alt="icon" className="mx-auto block" />

      <h1 className="formHeading text-center">Thank you</h1>

      <p className="text-center">
        Thanks for confirming your subscription!We hope you have fun using our
        platform.If you ever need support,please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
};

export default Completed;
