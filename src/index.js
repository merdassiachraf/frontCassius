import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import * as serviceWorker from "./serviceWorker";

import App from "./App";

//liens Css Local
import "./containers/NavBar/NavBar.css";
import "./containers/Posts/PostForm.css";
import "./containers/Home/Home.css";
import "./containers/SignUp/SignUp.css";
import "./containers/Login/Login.css";
import "./containers/DashBoard/DashBoard.css";
import "./containers/Posts/Posts.css";
import "./containers/Posts/PostsCard.css";
import "./containers/Common/TextFieldGroup.css";
import "./containers/CreateProfile/CreateProfile.css";
import "./containers/Profile/Profile.css";
import "./containers/PostPage/PostPage.css"
import "./containers/AddContactInformation/AddContactInformation.css"
import './containers/Profiles/Profiles.css'
import "./containers/Common/Spinner.css"
import "./containers/MyPosts/MyPosts.css"
import "./containers/MyPosts/MyPostCard.css"

//lien css Mdboostrap
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import "antd/dist/antd.css";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
