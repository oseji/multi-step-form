import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Step1 = () => {
  const [completed, setCompleted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const errLabelRefs = [useRef(null), useRef(null), useRef(null)];

  //hide error labels upon page loading
  useEffect(() => {
    errLabelRefs.forEach((item) => {
      item.current.classList.add("hidden");
    });
  }, []);

  //setting conditions to allow progress to step 2
  useEffect(() => {
    if (name && email && number !== "") {
      setCompleted(true);
      console.log("completed", completed);
    }
  }, [name, email, number]);

  const progress = (e) => {
    e.preventDefault();
    const nameErr = errLabelRefs[0].current;
    const emailErr = errLabelRefs[1].current;
    const numberErr = errLabelRefs[2].current;

    if (name && email && number !== "") {
      setCompleted(true);
      console.log("completed");
    }

    if (name === "") {
      nameErr.classList.remove("hidden");
    } else if (name !== "") {
      nameErr.classList.add("hidden");
    }

    if (email === "") {
      emailErr.classList.remove("hidden");
    } else if (email !== "") {
      emailErr.classList.add("hidden");
    }

    if (number === "") {
      numberErr.classList.remove("hidden");
    } else if (number !== "") {
      numberErr.classList.add("hidden");
    }
  };

  return (
    <form action="" className="stepFrom" onSubmit={progress}>
      <h1 className="formHeading">Personal info</h1>
      <p className="subHeading">
        Please provide your name, email address and phone number
      </p>

      <div className="inputGrpSection">
        <div className="inputGrp">
          <div className="labelGrp">
            <label htmlFor="name">name</label>
            <label htmlFor="name" className="errLabel" ref={errLabelRefs[0]}>
              This field is required
            </label>
          </div>

          <input
            type="text"
            placeholder="e.g. Stephen King"
            className="inputField inputFieldBorder"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="inputGrp">
          <div className="labelGrp">
            <label htmlFor="name">email address</label>
            <label htmlFor="name" className="errLabel" ref={errLabelRefs[1]}>
              This field is required
            </label>
          </div>

          <input
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            className="inputField inputFieldBorder"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputGrp">
          <div className="labelGrp">
            <label htmlFor="name">phone number</label>
            <label htmlFor="name" className="errLabel" ref={errLabelRefs[2]}>
              This field is required
            </label>
          </div>

          <input
            type="number"
            placeholder="e.g. +1 234 567 890"
            className="inputField inputFieldBorder"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
      </div>

      {completed ? (
        <Link to="./Step2">
          <button className="nextBtn">next step</button>
        </Link>
      ) : (
        <button className="nextBtn">next page</button>
      )}
    </form>
  );
};

export default Step1;
