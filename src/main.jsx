import React from "react";
import ReactDOM from "react-dom/client";
import eruda from "eruda";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
eruda.init();
