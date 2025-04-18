"use client"; // ✅ This makes it a Client Component
import { Provider } from "react-redux";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/queryClient";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/store";
import Loading from "@/app/loading";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
