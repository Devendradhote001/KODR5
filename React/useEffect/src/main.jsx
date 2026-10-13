import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ApiComp from "./components/ApiComp.jsx";

createRoot(document.getElementById("root")).render(<ApiComp />);
