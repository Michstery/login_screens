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
        {/* <header>
          <nav>
            <ul>
              <Link to="/" component={Home}>
                <li>Home</li>
              </Link>
              <Link to="/twos#my_anchor" component={Twos}>
                <li>first-page</li>
              </Link>
              <Link to="/second" component={Second}>
                <li>second-page</li>
              </Link>
              <Link to="/three" component={Three}>
                <li>third-page</li>
              </Link>
              <Link to="/four" component={Four}>
                <li>fourth-page</li>
              </Link>
            </ul>
          </nav>
        </header> */}
        <Header />
        <div className="content">
          <div className="contain-5"></div>
          <Twos />
          <Second />
          <Three />
          <Four />
        </div>
      </div>
    );
  }
}

export default Home;
