import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

export default function NavBar() {

  const navStyleFn = (prop : any) => {
    const { isActive } = prop;
    console.log(isActive);

    return {
      textDecoration: isActive? 'none' : 'underline'
    }
    
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ice Cream Shop
          </Typography>
          <NavLink to={'/login'} style={navStyleFn}>Login</NavLink> 
          <NavLink to={'/signup'} style={navStyleFn}>SignUp</NavLink>
          {/* <Link to={'/login'}>Login</Link> 
          <Link to={'/signup'} >SignUp</Link> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
