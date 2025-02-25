import { Container, TextField, Typography, Button, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  _IsValidEmail,
  _IsValidPass,
  errorMessages,
} from "../../../helpers/Validations";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthProvider/AuthProvider";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailErr, setEmailErr] = useState<string>("");
  const [passwordErr, setPasswordErr] = useState<string>("");
  const navigate = useNavigate();
  const { login } = useAuth();

  //Event
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    clearErrors();

    //Set the error messages
    const errors = {
      email: !_IsValidEmail(email) ? errorMessages.email : "",
      password: !_IsValidPass(password) ? errorMessages.password : "",
    };

    //Login Form validations
    if (errors.email || errors.password) {
      setEmailErr(errors.email);
      setPasswordErr(errors.password);
      return;
    }

    //username and password => JWT Token
    //Profile
    //login('login');
    login({ email: email, password: password });
    navigate("/");
  };

  const clearErrors = () => {
    //Reset error messages
    setEmailErr("");
    setPasswordErr("");
  };

  //componentDidMount
  useEffect(() => {
    console.log("Login");
  }); //Called Rerender component - useState();

  useEffect(() => {
    console.log("Login Call Once");
  }, []); //Called only once component is mounted

  //componentDidUpdate
  useEffect(() => {
    console.log("Email Validation...!");
  }, [emailErr]);

  //componentDidUnmount
  useEffect(() => {
    return () => {
      clearErrors();
      console.log("Login Cleanup");
    };
  }, []);

  return (
    <>
      <Container>
        <Box sx={{ width: 500, marginLeft: 40 }}>
          <form onSubmit={handleLogin}>
            <Typography variant="h4">LogIn</Typography>
            <TextField
              id="email"
              fullWidth
              margin="normal"
              label="Email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              variant="outlined"
              type="text"
              error={!!emailErr}
              helperText={emailErr}
            />
            <TextField
              id="passsword"
              fullWidth
              margin="normal"
              label="Password"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              variant="outlined"
              type="password"
              error={!!passwordErr}
              helperText={passwordErr}
            />
            <Button type="submit" variant="contained" fullWidth>
              LogIn
            </Button>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ marginTop: 2 }}
              onClick={() => navigate("/signup")}
            >
              SignUp
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default Login;
