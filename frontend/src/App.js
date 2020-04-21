import React from "react";
import { Provider } from "react-redux";
import { Messages } from "./components";
import Layout from "./Layout";
import Routes from "./routes";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Messages />
        <Routes />
      </Layout>
    </Provider>
  );
}

export default App;
