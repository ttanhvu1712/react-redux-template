import React, { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { FallbackLoading, ErrorBoundary, AppProvider } from "src/components";
import { Router } from "src/layout";
import store from "src/store";

function App() {
  return (
    <Suspense fallback={<FallbackLoading />}>
      <Provider store={store}>
        <HelmetProvider>
          <ErrorBoundary>
            <BrowserRouter>
              <AppProvider>
                <Router />
              </AppProvider>
            </BrowserRouter>
          </ErrorBoundary>
        </HelmetProvider>
      </Provider>
    </Suspense>
  );
}

export default App;
