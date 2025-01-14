import { Box, Button, Container, TextField, Typography } from "@mui/material";

const Signup: React.FC = () => {

    const handleSignUp =() =>{
         //logic
        // Name validation
        // Password validation
        // Confirm Password Validation
        // Email validation
        // Mobile No Validation
    }

    return (<>
    <Container>
        <Box sx={{ width: 500, marginLeft: 40 }}>
        <form onSubmit={handleSignUp}>
            <Typography variant="h1">Sign Up</Typography>
            <TextField
            id="fname"
            fullWidth
            margin="normal"
            label="Full Name"
            variant="outlined"
            type="text"
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