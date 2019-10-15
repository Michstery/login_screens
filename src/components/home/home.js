import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./home.css";
// import { ReactComponent } from "*.svg";
import Twos from "../twos/Twos";
import Three from "../three/Three";
import Second from "../second/Second";
import Four from "../four/Four";
import Header from "../header/Header";

class Home extends Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <div className="content">
          <div className="contain-5 banner">
            <nav
              class="navbar navbar-expand-md navbar-dark fixed-top"
              id="banner"
            >
              <div class="container">
                <a class="navbar-brand" href="#">
                  <span>Login</span> Screen
                </a>

                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapsibleNavbar"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                      <a class="nav-link" href="/">
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/#my_anchor">
                        First Screen
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/#my_anchor3">
                        Second Screen
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/#my_anchor2">
                        Third Screen
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/#my_anchor4">
                        Fourth Screen
                      </a>
                    </li>

                    {/* <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="navbardrop"
                        data-toggle="dropdown"
                      >
                        Dropdown link
                      </a>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">
                          Link 1
                        </a>
                        <a class="dropdown-item" href="#">
                          Link 2
                        </a>
                        <a class="dropdown-item" href="#">
                          Link 3
                        </a>
                      </div>
                    </li> */}
                  </ul>
                </div>
              </div>
            </nav>

            <div class="banners">
              <div class="container">
                <div class="banner-text">
                  <div class="banner-heading">Glad to see you here !</div>
                  <div class="banner-sub-heading">
                    View the Login Screens Below
                  </div>
                  <button
                    type="button"
                    class="btn btn-warning text-dark btn-banner"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>
          <section>
            <Twos />
          </section>
          <section>
            <Second />
          </section>
          <section>
            <Three />
          </section>
          <section>
            <Four />
          </section>{" "}
          */}
        </div>
      </div>
    );
  }
}

export default Home;
