import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./layout.jsx";
import "./index.css";
import env from "react-dotenv"




import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Departments from "./components/Departments/Departments.jsx";
import Homepage from "./components/Homepage/Homepage.jsx";
import Appdevs from "./components/sgdepts/furqanpf.jsx";
import Allappdevs from "./components/allappdevs/Allappdevs.jsx";
import ScheduleMeetingForm from "./components/AppointmentForm/Form.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google"; // Import GoogleOAuthProvider

const clientId = import.meta.env.VITE_CLIENTID ; // Replace with your actual Google client ID

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Homepage />} />
      <Route path="departments" element={<Departments />} />
      <Route path="appdevs" element={<Allappdevs />} />
      <Route path="furqan" element={<Appdevs />} />
      <Route path="book-appointment" element={<ScheduleMeetingForm />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Wrap the RouterProvider with GoogleOAuthProvider */}
    <GoogleOAuthProvider clientId={clientId}>
   
        <RouterProvider router={router} />
      
    </GoogleOAuthProvider>
  </StrictMode>
);
