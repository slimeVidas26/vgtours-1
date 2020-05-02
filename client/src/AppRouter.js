import React from "react";
import TwitterHome from "./components/TwitterHome";
import { BrowserRouter as Router, Route } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={TwitterHome} />
      </div>
    </Router>
  );
};