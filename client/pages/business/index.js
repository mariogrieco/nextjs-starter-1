import React from "react";

import Business from "../../src/features/business/business.container";
import { getBusinesses } from "../../src/features/business/business.action";

const BusinessPage = () => <Business />;

BusinessPage.getInitialProps = async ctx => {
  const { store, req, isServer } = ctx;

  if (isServer) {
    store.dispatch(getBusinesses({ cookie: req.headers.cookie }));
  } else {
    store.dispatch(getBusinesses());
  }

  return {};
};

export default BusinessPage;
