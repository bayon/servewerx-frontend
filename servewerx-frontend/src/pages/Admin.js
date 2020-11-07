import React from "react";
import { Button } from "../components/AuthForms";
import { useAuth } from "../context/auth";

import axios from "axios";
const { REACT_APP_API } = process.env;


function Admin(props) {
  const { setAuthTokens } = useAuth();
 

  function testToken() {
    const token = localStorage.getItem('tokens');
   console.log("token in UI: ",token);
 
    console.log("START: testToken");
    axios
      .get(`${REACT_APP_API}/auth/test`, {
         headers: {
          authorization: 'Bearer '+ token
        }
      })
      .then((result) => {
        console.log("TOKEN : THEN RESULT ");
        if (result.status === 200) {
          console.log("TOKEN 200 RESULT DATA:", result.data);
        } else {
          console.log("TOKEN !200 result.status !=== 200 ");
        }
      })
      .catch((e) => {
        console.log("TOKEN catch! axios error e:", e);
        
      });
  }

  function logOut() {
    setAuthTokens();
  }

  return (
    <div>
      <div>Admin Page</div>
      <Button onClick={testToken}>Test Token</Button>
      <Button onClick={logOut}>Log out</Button>
    </div>
  );
}

export default Admin;
