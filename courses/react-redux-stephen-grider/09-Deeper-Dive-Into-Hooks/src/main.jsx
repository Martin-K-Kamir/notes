import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "./context/BooksContext.jsx";
import App from "./App.jsx";
import "./index.css";
import { DevSupport } from "@react-buddy/ide-toolbox";
import { ComponentPreviews, useInitial } from "./dev/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider>
            <DevSupport
                ComponentPreviews={ComponentPreviews}
                useInitialHook={useInitial}
            >
                <App />
            </DevSupport>
        </Provider>
    </React.StrictMode>
);
