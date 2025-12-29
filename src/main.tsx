import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import WillBeDel from './Components/WillBeDel'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <WillBeDel />
  </StrictMode>
);
