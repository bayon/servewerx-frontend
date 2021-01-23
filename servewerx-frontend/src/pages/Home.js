import React from "react";

//const { REACT_APP_API } = process.env;
const REACT_APP_API = "http://localhost:4000/api/vTest"


function Home(props) {
  console.log("Home.js")
  console.log("process.env");
  console.log(process.env)
  return <div><p>Home Page</p>  REACT_APP_API<h1>IS:{REACT_APP_API}</h1>   </div>;
}

export default Home;