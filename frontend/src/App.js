// React and CSS Imports
import React from "react";
import "./App.scss";
import "globals/hack-styles.scss";
import '../node_modules/react-vis/dist/style.css';

// Installed dependency imports
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

// Website imports for classes you made
<<<<<<< HEAD
import { UserList } from "app/views";
=======
import { MainPage, Watchlist } from "app/views";
>>>>>>> 6dcecc00462586eeee427475d51161ce29cba33e

function App() {
  return (
    <div className="app fill-view">
      <Router>
        <Switch>
          <Route 
            exact path={"/"}
<<<<<<< HEAD
            component={UserList}
=======
            component={MainPage}
          />
          <Route
            exact path={"/watchlist"}
            component={Watchlist}
>>>>>>> 6dcecc00462586eeee427475d51161ce29cba33e
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
