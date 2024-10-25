import { Container, TextField, Typography, Button, Box } from "@mui/material";
import React from "react";

const Login: React.FC = () => {
    return <>
        <Container>
            <Box sx={{ width: 500, marginLeft: 40 }}>
            <Typography variant="h1">LogIn</Typography>
            <TextField id="email" fullWidth margin="normal" label="Email" variant="outlined" />
            <TextField id="passsword" fullWidth margin="normal" label="Password" variant="outlined" />
            <Button variant="contained" fullWidth>LogIn</Button>
            </Box>
        </Container>
    </>
}

export default Login;