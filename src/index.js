import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
//chanaged
ReactDOM.render(
  <App
    data-nsprojectname="Pixsta"
    data-nsprojectdescription="It's a social media website where users can connect each other with their interests.
      Features:
      User: Signup, Sign In, View Posts, Update Posts, Add new Posts, Like the Posts, Dislike the Posts, follow the User,
      UnFollow the User.
      Role: Developer | Tech Stack: ReactJS, NodeJs, ExpressJs, Mongo DB (MERN-Stack)."
  />,
  document.getElementById("root")
);
