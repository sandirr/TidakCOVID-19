import React from "react";
import "./App.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Map_Statistik from "./Components/Pages/Map-Statistik";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/map-statistik" exact component={Map_Statistik} />
        </Switch>
      </Router>
    );
  }
}

export default App;
