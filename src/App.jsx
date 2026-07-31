import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

// Authentication
import AuthLoader from "./components/common/AuthLoader";
import ProtectedRoute from "./routes/ProtectedRoute";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Solar from "./pages/Solar";
import Aquarium from "./pages/Aqurium";
import Agency from "./pages/Agency";
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";
import Contact from "./pages/Contact";

// Admin Pages
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import Leads from "./pages/admin/Leads";
import AdminBlog from "./pages/admin/AdminBlog";
import Gallery from "./pages/admin/Gallery";
import Testimonials from "./pages/admin/Testimonials";
import Settings from "./pages/admin/Settings";
import Profile from "./pages/admin/Profile";
import WebsiteContent from "./pages/admin/WebsiteContent";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>

     <Toaster
    position="top-right"
    reverseOrder={false}
    toastOptions={{
      duration: 3000,
      style: {
        borderRadius: "10px",
      },
    }}
  />

      <AuthLoader>
        <Routes>


          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/solar" element={<Solar />} />
            <Route path="/aquarium" element={<Aquarium />} />
            <Route path="/agency" element={<Agency />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<SingleBlog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
           
          </Route>

        

          <Route path="/admin/login" element={<Login />} />

           
          
          <Route element={<ProtectedRoute />}>
           <Route element={<AdminLayout />}>

              <Route
                path="/admin/dashboard"
                element= {<Dashboard />}
              />
              <Route
                path="/admin/website-content"
                element= {<WebsiteContent />}
              />
              <Route
                path="/admin/blog"
                element= {<AdminBlog/>}
              />

              <Route
                path="/admin/leads"
                element={<Leads />}
              />

              <Route
                path="/admin/gallery"
                element={<Gallery />}
              />

              <Route
                path="/admin/testimonials"
                element={<Testimonials />}
              />

              <Route
                path="/admin/settings"
                element={<Settings />}
              />

              <Route
                path="/admin/profile"
                element={<Profile />}
              />

            </Route>
          </Route>

        </Routes>
      </AuthLoader>
    </BrowserRouter>
  );
}

export default App;