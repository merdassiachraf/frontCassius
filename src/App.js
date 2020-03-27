import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./containers/NavBar/NavBar";
import Home from "./containers/Home/Home";
import AddPost from "./containers/AddPost/AddPost";
import SignUp from "./containers/SignUp/SignUp";
import Login from "./containers/Login/Login";
import AgencyProfil from "./containers/AgencyProfil/AgencyProfil";
import PostPage from "./containers/PostPage/PostPage";
import AgenciesList from "./containers/AgenciesList/AgenciesList";
import PostsList from "./containers/PostsList/PostsList";
import PostUser from "./containers/PostUser/PostUser";
import ClientProfil from "./containers/ClientProfil/ClientProfil";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" name="Cassius" exact component={Home} />
          <Route path="/add_post" name="Add Post" component={AddPost} />
          <Route path="/signup" name="Register" component={SignUp} />
          <Route path="/signin" name="Sign In" component={Login} />
          <Route path="/agency" name ="" component={AgencyProfil} />
          <Route path="/post" name="" component={PostPage} />
          <Route path="/agencies_list" name="Agencies List" component={AgenciesList} />
          <Route path="/posts_list" name="Posts List" component={PostsList} />
          <Route path="/post_user" name="" component={PostUser} />
          <Route path="/client_user" name="" component={ClientProfil} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
