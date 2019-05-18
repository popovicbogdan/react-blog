import React, { Fragment } from "react";
import Header from "./components/Header.js";
import Atricles from "./components/Articles.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer.js";
import Article from "./components/Article.js";
import LoginPage from "./components/LoginPage.js";
import SignupPage from "./components/SignupPage.js";
import CreateArticle from "./components/CreateArticle.js";
function App() {
  return (
    <BrowserRouter>
      <div className="App" id="page-container">
        <Fragment>
          <div className="content-wrap">
            <Header />
            <Switch>
              <Route path="/articles/:id(\d+)" component={Article} />
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignupPage} />
              <Route path="/createarticle" component={CreateArticle} />
              <Route exact path="/" component={Atricles} />
            </Switch>
          </div>
          <Footer />
        </Fragment>
      </div>
    </BrowserRouter>
  );
}

export default App;
