import React from "react";
import "./four.css";

const Four = props => {
  return (
    <div className="contain-4 " id="my_anchor4" style={{ paddingTop: "40px" }}>
      <div className="imgcontainer">
        <img
          src="https://image.flaticon.com/icons/svg/476/476863.svg"
          alt="Avatar"
          className="avatar"
        />
      </div>
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-header">
            <h3 style={{ textAlign: "center" }}>MEMBER LOGIN</h3>
            <div className="d-flex justify-content-end social_icon">
              <span>
                <i className="fab fa-facebook-square"></i>
              </span>
              <span>
                <i className="fab fa-google-plus-square"></i>
              </span>
              <span>
                <i className="fab fa-twitter-square"></i>
              </span>
            </div>
          </div>
          <div className="card-body">
            <form>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="USERNAME"
                />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="PASSWORD"
                />
              </div>
              <div className="row align-items-center remember">
                <input type="checkbox" />
                Remember Me
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="LOGIN"
                  className="btn float-right login_btn"
                />
              </div>
            </form>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center links">
              Don't have an account?
              <a href="./" style={{ color: "yellow" }}>
                Sign Up
              </a>
            </div>
            <div className="d-flex justify-content-center">
              <a href="./registration" style={{ color: "yellow" }}>
                Forgot your password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Four;
