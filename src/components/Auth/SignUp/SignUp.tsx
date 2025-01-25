import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { _IsValidEmail, _IsValidMobileNo, _IsValidPass, _IsValidConfirmPass, _IsValidFname } from "../../../helpers/Validations";

const Signup: React.FC = () => {
  const [fname,setFirstName] = useState<string>("");
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
    // console.log(fname);
    //  console.log(email);
    console.log(password);
    console.log(confirmPassword);
    //  console.log(mobileNo);
    //logic
    // Name validation
    // Password validation
    // Confirm Password Validation
    // Email validation
    // Mobile No Validation

    //Rest error messages
    setFirstNameErr("");
    setEmailErr("");
    setPasswordErr("");
    setConfirmPasswordErr("");
    setMobileNoErr("");
    //Set the error messages
    const errors = {
      fname: !_IsValidFname(fname) ? "Please enter valid name" : "",
      email: !_IsValidEmail(email) ? "Please enter valid email." : "",
      password: !_IsValidPass(password) ? "Plesae enter valid password." : "",
      confirmPassword: !_IsValidConfirmPass(password, confirmPassword) ? "Password and confirm password are not same." : "",
      mobileNo: !_IsValidMobileNo(mobileNo) ? "Please enter a valid mobile number" : ""

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

    //Validate password and confirm password
    
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