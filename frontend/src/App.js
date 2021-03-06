// React and CSS Imports
import React from "react";
import "./App.scss";
import "globals/hack-styles.scss";
import '../node_modules/react-vis/dist/style.css';

// Installed dependency imports
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

// Website imports for classes you made
import { MainPage, Watchlist, Settings } from "app/views";

function App() {
  return (
    <div className="app fill-view">
      <Router>
        <Switch>
          <Route 
            exact path={"/"}
            component={Settings}
          />
          <Route
            exact path={"/explore"}
            component={MainPage}
          />
          <Route
            exact path={"/watchlist"}
            component={Watchlist}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
