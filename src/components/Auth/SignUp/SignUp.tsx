import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { _IsValidEmail, _IsValidMobileNo, _IsValidPass, _IsValidConfirmPass, _IsValidFname, errorMessages } from "../../../helpers/Validations";

const Signup: React.FC = () => {
  const [fname, setFirstName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [mobileNo, setMobileNo] = useState<string>("");
  const [fnameErr, setFirstNameErr] = useState<string>("");
  const [emailErr, setEmailErr] = useState<string>("");
  const [passwordErr, setPasswordErr] = useState<string>("");
  const [confirmPasswordErr, setConfirmPasswordErr] = useState<string>("");
  const [mobileNoErr, setMobileNoErr] = useState<string>("");

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    clearErrors();
    
    //Set the error messages
    const errors = {
      fname: !_IsValidFname(fname) ? errorMessages.name : "",
      email: !_IsValidEmail(email) ? errorMessages.email : "",
      password: !_IsValidPass(password) ? errorMessages.password : "",
      confirmPassword: !_IsValidConfirmPass(password, confirmPassword) ? errorMessages.confirmPassword : "",
      mobileNo: !_IsValidMobileNo(mobileNo) ? errorMessages.mobileNo : ""

    }

    //Signup Form validations
    if (errors.fname || errors.email || errors.password || errors.confirmPassword || errors.mobileNo) {
      setFirstNameErr(errors.fname)
      setEmailErr(errors.email);
      setPasswordErr(errors.password);
      setConfirmPasswordErr(errors.confirmPassword);
      setMobileNoErr(errors.mobileNo)
      return;
    }
  }

  const clearErrors = () => {
    //Reset error messages
    setFirstNameErr("");
    setEmailErr("");
    setPasswordErr("");
    setConfirmPasswordErr("");
    setMobileNoErr("");
  }

  return (<>
    <Container>
      <Box sx={{ width: 500, marginLeft: 40 }}>
        <form id="signupForm" onSubmit={handleSignUp}>
          <Typography variant="h4">Sign Up</Typography>
          <TextField
            id="fname"
            fullWidth
            margin="normal"
            label="Full Name"
            value={fname}
            onChange={(e) => setFirstName(e.target.value)}
            variant="outlined"
            type="text"
            error={!!fnameErr}
            helperText={fnameErr}
          />
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
          <TextField
            id="confirmpasssword"
            fullWidth
            margin="normal"
            label="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            variant="outlined"
            type="password"
            error={!!confirmPasswordErr}
            helperText={confirmPasswordErr}
          />
          <TextField
            id="mobileno"
            fullWidth
            margin="normal"
            label="Mobile Number"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            variant="outlined"
            type="text"
            error={!!mobileNoErr}
            helperText={mobileNoErr}
          />
          <Button type="submit" variant="contained" fullWidth>
            Signup
          </Button>
        </form>
      </Box>
    </Container>
  </>)
}

export default Signup;