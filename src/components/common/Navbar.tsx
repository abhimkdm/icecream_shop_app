import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { IconButton, Toolbar, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthProvider/AuthProvider";
import Badge, { badgeClasses } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { styled } from '@mui/material/styles';
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function NavBar() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const cartItemCount = useSelector((state : RootState) => state.cart.items.length);

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
  };

  const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

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
              <IconButton onClick={()=> navigate("/cart")}>
                <ShoppingCartIcon fontSize="small" />
                <CartBadge
                  badgeContent={cartItemCount}
                  color="primary"
                  overlap="circular"
                />
              </IconButton>
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
