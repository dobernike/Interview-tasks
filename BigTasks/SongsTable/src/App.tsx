import React from "react";
import { Normalize } from "styled-normalize";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

import Songs from "./containers/songs.container";

const App: React.FC = () => {
  return (
    <>
      <Normalize />
      <Provider store={store}>
        <Router>
          <div className="SongApplication">
            <Route path="/" component={Songs} />
          </div>
        </Router>
      </Provider>
    </>
  );
};

export default App;
