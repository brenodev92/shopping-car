import React from "react";
import { Provider } from "react-redux";
import { Alerts } from "./components";
import Layout from "./Layout";
import Routes from "./routes";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Alerts />
        <Routes />
      </Layout>
    </Provider>
  );
}

export default App;
