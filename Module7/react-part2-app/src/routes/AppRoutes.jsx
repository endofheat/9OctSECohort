import { BrowserRouter as Router, Routes, Route, useRoutes } from "react-router-dom";
import DashboardPage, { DashboardMessages, DashboardTasks} from "../pages/DashboardPage";
import AboutPage from "../pages/AboutPage";
import PageNotFound from "../pages/PageNotFound";
import Homepage from "../pages/Homepage";
import SignUpPage from "../pages/SignUpPage";
import PostsPage from "../pages/PostsPage";
import { PostList, Post } from "../components/PostsList";
import ProtectedRoute from "./ProtectedRoute";
import LoginForm from "../components/LoginForm";

function AppRoutes(props) {
  return (
    <Routes>
      {/* index matches on default/home URL: / */}
      <Route index element={<Homepage {...props} />} />
      <Route
        path="dash"
        element={
          <ProtectedRoute>
            <DashboardPage {...props} />
          </ProtectedRoute>
        }
      >
        <Route path="messages" element={<DashboardMessages />} />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>
      <Route path="login" element={<LoginForm />} />

      {/* nested routes, matches on /dash/tasks etc */}
      <Route path="dash" element={<DashboardPage {...props} />}>
        <Route path="messages" element={<DashboardMessages />} />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>

      <Route path="/about" element={<AboutPage {...props} />} />

      <Route path="/signup" element={<SignUpPage {...props} />} />

      <Route path="/posts" element={<PostsPage {...props} />}>
        <Route index element={<PostList />} />
        <Route path=":id" element={<Post />} />
      </Route>
      {/* special route to handle if none of the above match */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
// Name this file AppRoutes.jsx and store in new folder 'routes'
