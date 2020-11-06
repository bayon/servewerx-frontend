import React from "react";
import { Button } from "../components/AuthForms";
import { useAuth } from "../context/auth";

import axios from "axios";

function Admin(props) {
  const { setAuthTokens } = useAuth();
  const api_prod = "http://67.205.153.202:3000/api/vTest"
  const api_dev  = "http://localhost:4000/api/vTest"
  const API_URL = api_prod;

  function testToken() {
    const token = localStorage.getItem('tokens');
   console.log("token in UI: ",token);
 
    console.log("START: testToken");
    axios
      .get(`${API_URL}/auth/test`, {
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
