import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import logoImg from "../img/logo.jpg";
import { Card, Logo, Form, Input, Button, Error } from "../components/AuthForms";
import { useAuth } from "../context/auth";
const { REACT_APP_API } = process.env;

function Login(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();
  //const referer = props.location.state.referer || '/';
  const referer = props.location || '/';


  function postLogin() {
    console.log('START: postLogin')
    const api_prod = "http://67.205.153.202:4000/api/vTest"
    const api_dev  = "http://localhost:4000/api/vTest"
    const API_URL = api_dev;

    axios.post(`${API_URL}/auth/login`, {
      userName,
      password
      
    }).then(result => {
      console.log("LOGIN : THEN RESULT ")
      if (result.status === 200) {
        console.log("LOGIN status code 200")
        console.log("result:",result);
        console.log("LOGIN RESULT DATA:",result.data)
        setAuthTokens(result.data);
        setLoggedIn(true);
      } else {
        console.log("LOGIN result.status !=== 200 ")
        setLoggedIn(false);
        setIsError(true);
      }
    }).catch(e => {
      console.log("LOGIN catch axios error e:",e)
      setLoggedIn(false);
      setIsError(true);
    });
  }

  if (isLoggedIn) {
    console.log("LOGIN isLoggedIN = TRUE")
    return <Redirect to={referer} />;
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
        <Button onClick={postLogin}>Sign In</Button>
      </Form>
      <Link to="/signup">Don't have an account?</Link>
        { isError &&<Error>The username or password provided were incorrect!</Error> }
    </Card>
  );
}

export default Login;