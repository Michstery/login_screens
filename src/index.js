import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
// import faker from "faker";
import Home from "./components/home/home";
import Twos from "./components/twos/Twos";
import Three from "./components/three/Three";
import Second from "./components/second/Second";
import Four from "./components/four/Four";

export default function App() {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/twos" exact component={Twos} />
      <Route path="/three" exact component={Three} />
      <Route path="/second" exact component={Second} />
      <Route path="/four" exact component={Four} />
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);
