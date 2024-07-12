import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ReducerProvider } from "./providers/useReducerProvider";
import { PlayListProvider } from "./providers/PlayListContextProvier";
import { HistoryProvider } from "./providers/HistoryContextProvider";
import { LoaderProvider } from "./providers/LoaderContextProvider";
import { AuthProvider } from "./providers/AuthProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <LoaderProvider>
          <ReducerProvider>
            <HistoryProvider>
              <PlayListProvider>
                <App />
              </PlayListProvider>
            </HistoryProvider>
          </ReducerProvider>
        </LoaderProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  rootElement
);
