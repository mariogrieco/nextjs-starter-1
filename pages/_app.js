import React from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";

import withReduxSaga from "../src/lib/withReduxSaga";

import "bootstrap/dist/css/bootstrap.css";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withReduxSaga(MyApp);
