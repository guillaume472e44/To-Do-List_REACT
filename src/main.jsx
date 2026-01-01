import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const DATA = [
  { id: "todo-1", text: "Item 1" },
  { id: "todo-2", text: "Item 2" },
  { id: "todo-3", text: "Item 3" },
];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App tasks={DATA} />
  </StrictMode>
);
