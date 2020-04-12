import React from "react";
import "./App.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Map_Statistik from "./Components/Pages/Map-Statistik";
import PeriksaMandiri from "./Components/Pages/PeriksaMandiri";
import Tentang from "./Components/Pages/Tentang";
import Donasi from "./Components/Pages/Donasi";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tentang" component={Tentang} />
          <Route path="/peta-statistik" component={Map_Statistik} />
          <Route path="/periksa-mandiri" component={PeriksaMandiri} />
          <Route path="/donasi" component={Donasi} />
        </Switch>
      </Router>
    );
  }
}

export default App;
