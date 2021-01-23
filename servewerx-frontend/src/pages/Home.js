import React from "react";

 

function Home(props) {
  console.log("Home.js")
  console.log("process.env");
  console.log(process.env);
  console.log("REACT_APP_MY_ENV",process.env.REACT_APP_MY_ENV);
  console.log("REACT_APP_MY_ENV",process.env.REACT_APP_MY_ENV);
  console.log("REACT_APP_API. . . .",process.env.REACT_APP_API);
  return <div><p>Home Page</p>  REACT_APP_API<h1>IS:{process.env.REACT_APP_API}</h1>   </div>;
}

export default Home;