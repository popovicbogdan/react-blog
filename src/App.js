import React, { Component, Fragment } from "react";
import Header from "./components/Header.js";
import Articles from "./components/Articles.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer.js";
import Article from "./components/Article.js";
import LoginPage from "./components/LoginPage.js";
import SignupPage from "./components/SignupPage.js";
import CreateArticle from "./components/CreateArticle.js";
import PrivateRoute from "./components/common/privateRoute.js";
import { loadUser } from "./store/actions/auth";
import store from "./store/store";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App" id="page-container">
          <Fragment>
            <div className="content-wrap">
              <div className="top-cont">
                <Header />
                <Switch>
                  <Route path="/articles/:id(\d+)" component={Article} />
                  <Route path="/login" component={LoginPage} />
                  <Route path="/signup" component={SignupPage} />
                  <PrivateRoute
                    path="/createarticle"
                    component={CreateArticle}
                  />
                  <Route exact path="/" component={Articles} />
                </Switch>
              </div>
            </div>
            <Footer />
          </Fragment>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
