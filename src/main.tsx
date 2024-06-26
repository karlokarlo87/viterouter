import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { AuthContext } from "./context/AuthContext.tsx";
const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 0, retryDelay: 1000 } },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContext>
        <App />
      </AuthContext>
    </QueryClientProvider>
  </React.StrictMode>
);
