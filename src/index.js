import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import Header from "./components/header";
import Postings from "./views/postings";
import PostingDetails from "./views/postingDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheet/main.scss";

ReactDOM.render(
  <Provider store={configureStore()}>
    <Header />
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Postings} />
          <Route path="/detail" component={PostingDetails} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  </Provider>,
  document.getElementById("app")
);
