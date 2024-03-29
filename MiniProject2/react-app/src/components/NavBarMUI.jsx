import * as React from "react";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { NavLink } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitch";
import { Route } from "react-router-dom";

const pages = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/movie",
    name: "Movie",
  },
  {
    path: "/login",
    name: "Login",
  },
  {
    path: "/signup",
    name: "Sign Up",
  },
];
const settings = [
  {
    path: "/profile",
    name: "Profile",
  },
  {
    path: "/account",
    name: "Account",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
  },
  {
    path: "/logout",
    name: "Logout",
  },
];

const NavigationButton = ({ to, children, onClick, ...props }) => (
  <NavLink to={to} onClick={onClick} style={{ textDecoration: "none" }}>
    <Button {...props}>{children}</Button>
  </NavLink>
);

/*   const [searchTerm, setSearchTerm] = useState('');
  const movieData = UseData();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMovies = movieData.results?.filter(
    (movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  ); */

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  /*   const { darkMode } = useMyThemeContext();
  const NavBarStyles = {
    backgroundColor: darkMode ? themes.dark : themes.light,
    color: darkMode ? themes.dark : themes.light,
  };
 */
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="100%">
        <Toolbar disableGutters /* style={NavBarStyles} */>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <NavLink to={page.path}>{page.name}</NavLink>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <NavigationButton
                key={index}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
              </NavigationButton>
            ))}
          </Box>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              /* type="text"
              value={searchTerm} 
              onChange={handleSearch} */
              placeholder="Search movies..."
              inputProps={{ "aria-label": "search" }}
            />
            {/*  {filteredMovies && filteredMovies.length > 0 ? (
        <ul>
          {filteredMovies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      ) : (
        <p>No movies found.</p>
      )} */}
          </Search>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem key={index} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <NavLink to={setting.path}>{setting.name}</NavLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <ThemeSwitcher />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
