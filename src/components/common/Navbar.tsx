import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Toolbar, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthProvider/AuthProvider";

export default function NavBar() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const navStyleFn = (prop: any) => {
    const { isActive } = prop;
    //console.log(isActive);

    return {
      textDecoration: isActive ? "none" : "underline",
    };
  };

  const reDirectToHome = () => {
    navigate("/");
    //window.location.href = '/';
  };

  const logOut = () => {
    logout();
    reDirectToHome();
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={reDirectToHome}
            style={{ cursor: "pointer" }}
          >
            Ice Cream Shop
          </Typography>

          {!isAuthenticated ? (
            <>
              <NavLink to={"/login"} style={navStyleFn}>
                Login
              </NavLink>
              <NavLink to={"/signup"} style={navStyleFn}>
                SignUp
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to={"/profile"} state={navStyleFn}>
                Profile
              </NavLink>
              <Typography style={{ cursor: "pointer" }} onClick={logOut}>
                Logout
              </Typography>
            </>
          )}

          {/* <Link to={'/login'}>Login</Link> 
          <Link to={'/signup'} >SignUp</Link> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
