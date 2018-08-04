import React from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";

import withReduxSaga from "../src/lib/withReduxSaga";

import Layout from "../src/components/layout";
import { isLoggedIn } from "../src/features/user/user.action";

import "bootstrap/dist/css/bootstrap.css";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const { store, req, isServer } = ctx;

    if (isServer) {
      store.dispatch(isLoggedIn({ session: req.session }));
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    );
  }
}

export default withReduxSaga(MyApp);
