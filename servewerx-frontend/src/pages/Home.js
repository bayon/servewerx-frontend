import React from "react";

const { REACT_APP_API } = process.env;

function Home(props) {
  console.log("Home.js")
  console.log("process.env");
  console.log(process.env)
  return <div><p>Home Page</p>  REACT_APP_API<h1>{REACT_APP_API}</h1>   </div>;
}

export default Home;