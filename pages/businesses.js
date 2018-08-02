import React from "react";

import Businesses from "../src/containers/businesses.container";

import { getBusinesses } from "../src/actions/business.action";

const BusinessesPage = () => <Businesses />;

BusinessesPage.getInitialProps = async ctx => {
  const { store } = ctx;
  store.dispatch(getBusinesses());
  return {};
};

export default BusinessesPage;
