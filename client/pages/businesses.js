import React from "react";

import Businesses from "../src/features/businesses/businesses.container";
import { getBusinesses } from "../src/features/businesses/businesses.action";

const BusinessesPage = () => <Businesses />;

BusinessesPage.getInitialProps = async ctx => {
  const { store, req, isServer } = ctx;

  if (isServer) {
    store.dispatch(getBusinesses({ cookie: req.headers.cookie }));
  } else {
    store.dispatch(getBusinesses());
  }

  return {};
};

export default BusinessesPage;
