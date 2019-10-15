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
            <a href="/#my_anchor">
              <li>first-page</li>
            </a>
            <a href="/#my_anchor3" componenet={Second}>
              <li>second-page</li>
            </a>
            <a href="/#my_anchor2" componenet={Three}>
              <li>third-page</li>
            </a>
            <a href="/#my_anchor4" componenet={Four}>
              <li>fourth-page</li>
            </a>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
