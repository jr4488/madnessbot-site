import { createRoot } from "react-dom/client";
import App from "./App";
import { initUmami } from "./lib/analyticsGuard";
import "./index.css";

initUmami();
createRoot(document.getElementById("root")!).render(<App />);
