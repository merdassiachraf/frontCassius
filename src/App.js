import React from "react";

import NavBar from "./containers/NavBar/NavBar"
import Home from "./containers/Home/Home"
import AddPictures from "./containers/AddPictures/AddPictures"
import AddPost from './containers/AddPost/AddPost'
import SignUp from "./containers/SignUp/SignUp"
import Login from "./containers/Login/Login"
import AgencyProfil from "./containers/AgencyProfil/AgencyProfil"
import PostPage from "./containers/PostPage/PostPage"

function App() {
  return (
    <div className="App">
      <NavBar />
     {/* <AddPictures/> */}
     {/* <AddPost/> */}
     {/* <Home/> */}
     {/* <SignUp/> */}
     {/* <Login/> */}
     {/* <AgencyProfil/> */}
     <PostPage/>
    </div>
  );
}

export default App;
