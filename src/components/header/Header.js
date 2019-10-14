import React from "react";
import { Link } from "react-router-dom";
import Home from "../home/home";
import Twos from "../twos/Twos";
import Three from "../three/Three";
import Second from "../second/Second";
import Four from "../four/Four";

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <Link to="/" componenet={Home}>
              <li>Home</li>
            </Link>
            <Link to="/#my_anchor" componenet={Twos}>
              <li>first-page</li>
            </Link>
            <Link to="/second" componenet={Second}>
              <li>second-page</li>
            </Link>
            <Link to="/three" componenet={Three}>
              <li>third-page</li>
            </Link>
            <Link to="/four" componenet={Four}>
              <li>fourth-page</li>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
