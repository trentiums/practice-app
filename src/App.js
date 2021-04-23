import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import LoginPage from "./views/LoginPage.js";
import { Provider } from "react-redux";
import Footer from "./containers/footer"
import Header from "./containers/header"
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter >
        <Header />
        <Switch>
          <Route exact path="/login" component={LoginPage} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;