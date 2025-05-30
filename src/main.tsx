// import { createRoot } from "react-dom/client";
// import App from "./App";
// import "./index.css";
// import { StrictMode } from "react";

// createRoot(document.getElementById("root")!).render(
// <StrictMode>
// <App />
// </StrictMode>);


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

