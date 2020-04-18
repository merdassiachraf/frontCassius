import React from "react";
import jwt_decode from "jwt-decode";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./Store";

import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";
import PrivateRoute from "./containers/Common/PrivateRoute";

import NavBar from "./containers/NavBar/NavBar";
import Home from "./containers/Home/Home";
import AddPost from "./containers/AddPost/AddPost";
import SignUp from "./containers/SignUp/SignUp";
import Login from "./containers/Login/Login";
import DashBoard from "./containers/DashBoard/DashBoard";
import PostPage from "./containers/PostPage/PostPage";
import AgenciesList from "./containers/AgenciesList/AgenciesList";
import PostsList from "./containers/PostsList/PostsList";
import PostUser from "./containers/PostUser/PostUser";
import ClientProfil from "./containers/ClientProfil/ClientProfil";
import CreateProfile from "./containers/CreateProfile/CreateProfile"

// Check for token
if (localStorage.jwtToken) {
  //Set auth token header auth
  setAuthToken(localStorage.jwtToken);

  //Decode token and get user info et exp
  const decoded = jwt_decode(localStorage.jwtToken);

  // set user and isAutheticated
  store.dispatch(setCurrentUser(decoded));

  // Check fro expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //Logout user
    store.dispatch(logoutUser());

    //Clear current profile
    store.dispatch(clearCurrentProfile());

    //Redirect to login
    window.location.href = "/login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar />
          <Route path="/" exact name="Cassius" component={Home} />
          <Route path="/add_post" exact name="Add Post" component={AddPost} />
          <Route path="/signup" exact name="Register" component={SignUp} />
          <Route path="/signin" exact name="Sign In" component={Login} />
          <Route path="/post" exact name="" component={PostPage} />
          <Switch>
            <PrivateRoute
              path="/dashboard"
              exact
              name=""
              component={DashBoard}
            />
          </Switch>
          <Switch>
            <PrivateRoute
              path="/create_profile"
              exact
              name=""
              component={CreateProfile}
            />
          </Switch>
          <Route
            path="/agencies_list"
            exact
            name="Agencies List"
            component={AgenciesList}
          />
          <Route
            path="/posts_list"
            exact
            name="Posts List"
            component={PostsList}
          />
          <Route path="/post_user" exact name="" component={PostUser} />
          <Route path="/client_user" exact name="" component={ClientProfil} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
