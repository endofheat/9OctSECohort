export const pages = [
  { path: "/", name: "Home" },
  { path: "/dashboard", name: "Dashboard" },
  { path: "/about", name: "About" },
  { path: "/login", name: "Login" },
  { path: "/cat", name: "Cat" },
  {
    path: "/signup",
    name: "Sign Up",
  },
  {
    path: "/profile",
    name: "Profile",
  },
  {
    path: "/account",
    name: "Account",
  },
  {
    path: "/logout",
    name: "Logout",
  },
];

{/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page, index) => (
                  <NavLink key={index} to={page.path} sx={{ my: 2, color: 'white', display: 'block' }}>
                  {page.name}
                  </NavLink>
              
            ))}
          </Box> */}