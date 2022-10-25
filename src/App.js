import React, { Suspense } from "react";
import { HireMeProvider } from "./context/HireMeContext";
import { ProjectProvider } from "./context/ProjectContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AdminContext } from "./context/AdminContext";
import { useAuth } from "./Shared/hooks/authHook";
import LoadingIcon from "./Shared/components/LoadingIcon";

const Header = React.lazy(() => import("./Header/page/Header"));
const Home = React.lazy(() => import("./Home/pages/Home"));
const HireMe = React.lazy(() => import("./HireMe/page/HireMe"));
const Portfolio = React.lazy(() => import("./Portfolio/pages/Portfolio"));
const Project = React.lazy(() => import("./Portfolio/components/Project"));
const AdminLogin = React.lazy(() => import("./Admin/Login"));
const AddProject = React.lazy(() => import("./Admin/AddProject"));
const EditProject = React.lazy(() => import("./Admin/EditProject"));
const CreateBlogPost = React.lazy(() => import("./Admin/CreateBlogPost"));
const EditBlogPost = React.lazy(() => import("./Admin/EditBlogPost"));

function App() {
  const { token, login, logout } = useAuth();

  return (
    <HireMeProvider>
      <AdminContext.Provider
        value={{
          isLoggedIn: !!token,
          token,
          login,
          logout,
        }}
      >
        <ProjectProvider>
          <Router>
            <Suspense
              fallback={
                <div className="w-full ">
                  <LoadingIcon height="h-[100vh]" />
                </div>
              }
            >
              {/* Hire me has to be above header so they dont over lap */}
              <HireMe />
              <Header />
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio/:id" element={<Project />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                {/* add admin access only routes */}
                {token && (
                  <>
                    <Route path="/admin/project" element={<AddProject />} />
                    <Route
                      path="/admin/project/:id"
                      element={<EditProject />}
                    />
                    <Route path="/admin/blog" element={<CreateBlogPost />} />
                    <Route path="/admin/blog/:id" element={<EditBlogPost />} />
                  </>
                )}
              </Routes>
              <ToastContainer />
            </Suspense>
          </Router>
        </ProjectProvider>
      </AdminContext.Provider>
    </HireMeProvider>
  );
}

export default App;
