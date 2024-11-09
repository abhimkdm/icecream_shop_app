import { Container, TextField, Typography, Button, Box } from "@mui/material";
import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailErr, setEmailErr] = useState<string>("");
  const [passwordErr, setPasswordErr] = useState<string>("");

  //Event 
  const handleLogin = (e: React.FormEvent) =>{
    e.preventDefault();
    console.log("Submit");

    // console.log(email);
    // console.log(password);

    //Rest error messages
    setEmailErr("");
    setPasswordErr("");

    //Set the error messages
    const errors = {
        email: email === "" ? "Please enter valid email." : "",
        password: password === "" ? "Plesae enter valid password." : ""
    }

    //Login Form validations
    if(errors.email || errors.password)
    {
        setEmailErr(errors.email);
        setPasswordErr(errors.password);
        return;
    }

  }

  return (
    <>
      <Container>
        <Box sx={{ width: 500, marginLeft: 40 }}>
        <form onSubmit={handleLogin}>
          <Typography variant="h1">LogIn</Typography>
          <TextField
            id="email"
            fullWidth
            margin="normal"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            type="password"
            error={!!passwordErr}
            helperText={passwordErr}
          />
          <Button type="submit" variant="contained" fullWidth>
            LogIn
          </Button>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default Login;
