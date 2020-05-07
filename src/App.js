import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Candidates from "./components/candidates";
import Questions from "./components/questions";
import CandidateDetails from "./components/candidateDetails";
import { Route, Redirect, Switch } from "react-router-dom";
import Comment from "./components/comment";
class APP extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        {/* <Candidates />
        <Questions /> */}

        <Switch>
          <Route path="/" exact component={Candidates} />
          <Route path="/CandidateDetails" exact component={CandidateDetails} />
        </Switch>

        <Link className="nav-link " to="/CandidateDetails"></Link>
      </div>
    );
  }
}

export default APP;
