import { createRoot } from "react-dom/client"; // Import createRoot from 'react-dom/client'
import App from "./App.jsx"; // Import your main App component
import "./index.css"; // Import your styles
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for routing
import Context from "./utils/Context.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Find the root element in your HTML
const rootElement = document.getElementById("root");

// Create the root using createRoot
const root = createRoot(rootElement);

// Render your app inside BrowserRouter
root.render(
  <Context>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </Context>
);
