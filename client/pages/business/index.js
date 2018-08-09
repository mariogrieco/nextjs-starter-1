import React from "react";

import Business from "../../src/features/business/business.container";
import { getBusinesses } from "../../src/features/business/business.action";

const BusinessPage = ({ page }) => <Business page={page} />;

BusinessPage.getInitialProps = async ctx => {
  const { store, req, isServer, query } = ctx;

  if (isServer) {
    store.dispatch(
      getBusinesses({ cookie: req.headers.cookie, page: query.page })
    );
  } else {
    store.dispatch(
      getBusinesses({
        page: query.page
      })
    );
  }

  return {
    page: query.page
  };
};

export default BusinessPage;
