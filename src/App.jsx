import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

// Authentication
import AuthLoader from "./components/comman/AuthLoader";
import ProtectedRoute from "./routes/ProtectedRoute";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Solar from "./pages/Solar";
import Aquarium from "./pages/Aqurium";
import Agency from "./pages/Agency";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

// Admin Pages
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import Leads from "./pages/admin/Leads";
import Gallery from "./pages/admin/Gallery";
import Testimonials from "./pages/admin/Testimonials";
import Settings from "./pages/admin/Settings";
import Profile from "./pages/admin/Profile";
import WebsiteContent from "./pages/admin/WebsiteContent";

function App() {
  return (
    <BrowserRouter>
      <AuthLoader>
        <Routes>


          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/solar" element={<Solar />} />
            <Route path="/aquarium" element={<Aquarium />} />
            <Route path="/agency" element={<Agency />} />
            <Route path="/blog" element={<Blog />} />
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