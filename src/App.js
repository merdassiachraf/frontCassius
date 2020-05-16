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
import SignUp from "./containers/SignUp/SignUp";
import Login from "./containers/Login/Login";
import PostPage from "./containers/PostPage/PostPage"
import DashBoard from "./containers/DashBoard/DashBoard";
import Posts from "./containers/Posts/Posts";
import PostForm from "./containers/Posts/PostForm";
import EditProfile from "./containers/EditProfile/EditProfile";
import CreateProfile from "./containers/CreateProfile/CreateProfile";
import AddContactInformation from "./containers/AddContactInformation/AddContactInformation";
import Profiles from "./containers/Profiles/Profiles";
import Profile from "./containers/Profile/Profile";
import EditPost from "./containers/Posts/EditPost"
import MyPosts from "./containers/MyPosts/MyPosts"
 
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
          <Route path="/signup" exact name="Register" component={SignUp} />
          <Route path="/login" exact name="Sign In" component={Login} />
          <Route path="/posts" exact name="Posts" component={Posts} />
          <Route
            path="/profile/:handle"
            exact
            name="Profile"
            component={Profile}
          />
          <Route
            path="/posts/:id"
            exact
            name="Post"
            component={PostPage}
          />
          <Switch>
            <PrivateRoute
              path="/dashboard"
              exact
              name=""
              component={DashBoard}
            />
            <PrivateRoute
              path="/edit_profile"
              exact
              name=""
              component={EditProfile}
            />
            <PrivateRoute
              path="/create_profile"
              exact
              name=""
              component={CreateProfile}
            />
             <PrivateRoute
              path="/posts/edit_post/:id"
              exact
              name="Edit Post"
              component={EditPost}
            />
              <PrivateRoute
              path="/dashboard/my_posts"
              exact
              name="My Posts"
              component={MyPosts}
            />
            <PrivateRoute
              path="/add_contact"
              exact
              name=""
              component={AddContactInformation}
            />
            <PrivateRoute
              path="/add_post"
              exact
              name="Add Post"
              component={PostForm}
            />
          </Switch>
          <Route path="/profiles" exact name="Profiles" component={Profiles} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
