import React from "react";
import "./three.css";

const Three = props => {
  return (
    <div className="contain-1">
      <h1 className="text-center mx-auto  ">
        {" "}
        <span>
          {" "}
          <img
            src="https://www.flaticon.com/premium-icon/icons/svg/1144/1144760.svg"
            class="img-tweek"
            alt="Logo"
          />{" "}
        </span>
        <br />
        hello ha
      </h1>

      <div className="card-1 card-login-1 mx-auto text-center ">
        <div class="card-header-1 mx-auto text-dark bg-transparent">
          {/* <span>
              {" "}
              <img
                src="https://www.flaticon.com/premium-icon/icons/svg/1144/1144760.svg"
                class="w-25"
                alt="Logo"
              />{" "}
            </span>
            <br /> */}
          <span class="logo_title mt-5"> Welcome </span>
        </div>
        <div class="card-body">
          <form action="" method="post">
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text-1">
                  <i class="fas fa-user"></i>
                </span>
              </div>
              <input
                type="text"
                name="email"
                class="form-control"
                placeholder="USERNAME"
              />
            </div>

            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text-1">
                  <i class="fas fa-key"></i>
                </span>
              </div>
              <input
                type="password"
                name="password"
                class="form-control"
                placeholder="PASSWORD"
              />
            </div>

            <div class="form-group">
              <input
                type="submit"
                name="btn"
                value="LOGIN"
                class="btn btn-lg d-block login_btn-1"
              />
            </div>
          </form>
        </div>
        <div class="card-footer-1">
          <a href="#">
            {" "}
            <br />
            forgot password ? <br />
          </a>

          <button type="button" class="btn login_btn-2 btn-sm ">
            SIGN-UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Three;
