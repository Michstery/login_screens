import React from "react";
import "./second.css";

const Second = props => {
  return (
    <div className="contain-3">
      <div className="wrapper fadeInDown">
        <div className="fadeIn first">
          <img
            src="https://image.flaticon.com/icons/svg/33/33308.svg"
            id="icon"
            alt="User Icon"
          />
        </div>
        <div id="formContent">
          <form className="formborder">
            <input
              type="text"
              id="login"
              className="input-one fadeIn second"
              name="login"
              placeholder="USERNAME"
            />
            <input
              type="text"
              id="password"
              className="input-one fadeIn third"
              name="login"
              placeholder="PASSWORD"
            />
            <input
              type="submit"
              className="fadeIn fourth btnedit"
              value="LOG IN"
            />
          </form>

          {/* <div id="formFooter">
          <a className="underlineHover" href="#">
            Forgot Password?
          </a>
        </div> */}
        </div>
        <div id="formFooter">
          <a className="underlineHover" href="#">
            Forgot Password?
          </a>
          <a className="underlineHover" href="#">
            sign-up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Second;
