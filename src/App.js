import React from "react";

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
        <NavBar />
        {/* <AddPost/> */}
        {/* <Home/> */}
        {/* <SignUp/> */}
        {/* <Login/> */}
        {/* <AgencyProfil/> */}
        {/* <PostPage/> */}
        <AgenciesList/>
        {/* <PostsList/> */}
        {/* <PostUser/> */}
        {/* <ClientProfil /> */}
      </div>
  );
}

export default App;
