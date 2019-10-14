import React from "react";
import "./twos.css";

const Twos = props => {
  return (
    <div className="contain-2" id="my_anchor">
      <div class="container">
        <h1 class="text-center mx-auto">
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

        <div class="card-2 card-login-2 mx-auto text-center ">
          <div class="card-header mx-auto text-dark bg-transparent">
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
              <div class="input-group form-group-2">
                <div class="input-group-prepend-2">
                  <span class="input-group-text">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  name="email"
                  class="form-control form-control-2"
                  placeholder="USERNAME"
                />
              </div>

              <div class="input-group form-group">
                <div class="input-group-prepend-2">
                  <span class="input-group-text">
                    <i class="fas fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  name="password"
                  class="form-control form-control-2"
                  placeholder="PASSWORD"
                />
              </div>

              <div class="form-group">
                <input
                  type="submit"
                  name="btn"
                  value="LOGIN"
                  class="btn btn-success btn-outline-danger  btn-block "
                />
              </div>
            </form>
          </div>
          <div class="card-footer">
            <a href="#"> forgot password ? </a>
            <br />
            <button type="button" class="btn btn-outline-danger btn-sm ">
              SIGN-UP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Twos;
