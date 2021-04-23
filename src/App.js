import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import LoginPage from "./views/LoginPage.js";
import RegisterPage from "./views/RegisterPage.js";
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
          <Route exact path="/register" component={RegisterPage} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;