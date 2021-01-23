
import React, { useState } from "react";
import { Link ,Redirect} from 'react-router-dom';
import logoImg from "../img/logo.jpg";
import { Card, Logo, Form, Input, Button } from '../components/AuthForms';
import axios from 'axios';
import { useAuth } from "../context/auth";
const { REACT_APP_API } = process.env;



function Signup() {

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();
  //const referer = props.location.state.referer || '/';
  //const referer = props.location || '/';
  const referer = '/';

  const api_prod = "http://67.205.153.202:4000/api/vTest"
  const api_dev  = "http://localhost:4000/api/vTest"
  const API_URL = api_dev;
 
  function postSignUp() {
    console.log('postSignUp....fn...')
    axios.post(`${API_URL}/auth/signup`, {
      userName,
      password
    }).then(result => {
       if (result.status === 200) {
        setAuthTokens(result.data);
        setLoggedIn(true);
      } else {
        console.log("axios error")
        setIsError(true);
      }
    }).catch(e => {
      console.log("catch axios:e:",e)
      setIsError(true);
    });
  }
// if isLoggedIn
  if(isLoggedIn){
    console.log("NOW LOGGED IN on signup page.")
    return <Redirect to={referer} />;
  }
  if(isError){
    console.log("error on the signup page.")
  }

  return (
    <Card>
      <Logo src={logoImg} />
      <Form>
        
        <Input
          type="username"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder="email"
        />
        
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <Input type="password" placeholder="password again" />
        <Button onClick={postSignUp}>Sign Up</Button>
      </Form>
      <Link to="/login">Already have an account?</Link>
    </Card>
  );
}

export default Signup;

