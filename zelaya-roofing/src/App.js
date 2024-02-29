import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./routes/Dashboard";
import AuthCallbackHandler from "./routes/AuthCallbackHandler";
import AdminLoginLink from "./routes/AdminLoginLink";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/auth/callback" element={<AuthCallbackHandler />} />
        <Route path="/admin" element={<AdminLoginLink />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
