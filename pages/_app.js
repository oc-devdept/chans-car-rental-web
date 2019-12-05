import "../assets/styles/bootstrap.min.css";
import "../assets/styles/fontawesome.min.css";
import "../assets/styles/style.css";
import "../assets/styles/responsive.css";
import "../assets/styles/animate.min.css";
import "../assets/styles/slick.css";
import "../assets/styles/slick-theme.css";

import { Provider } from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
// import { initStore } from "../store/reducers/cartReducer";
import makeStore from "store";
import { DefaultSeo } from "next-seo";
import GoTop from "../components/Shared/GoTop";

class MyApp extends App {
  // static async getInitialProps({ Component, ctx }) {
  //   return {
  //     pageProps: Component.getInitialProps
  //       ? await Component.getInitialProps(ctx)
  //       : {}
  //   };
  // }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <>
        <DefaultSeo
          title="Novine - React Next eCommerce Templates"
          description="Novine - React Next eCommerce Templates. This has been built with React, Next.js, Express.js, and ES6+"
          openGraph={{
            type: "website",
            locale: "en_IE",
            url: "https://nextland-react.envytheme.com/",
            site_name: "Novine - React Next eCommerce Templates"
          }}
        />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
        <GoTop scrollStepInPx="50" delayInMs="16.66" />
      </>
    );
  }
}

export default withRedux(makeStore)(withReduxSaga(MyApp));
