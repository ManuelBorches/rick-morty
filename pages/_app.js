import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@src/app/store";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import AppLayout from "@components/AppLayout/AppLayout";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <Provider store={store}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
}

export default MyApp;
