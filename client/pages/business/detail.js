import React from "react";

import BusinessDetail from "../../src/features/business/detail/businessDetail.container";
import { getSingleBusiness } from "../../src/features/business/detail/businessDetail.action";

const BusinessDetailPage = () => <BusinessDetail />;

BusinessDetailPage.getInitialProps = async ctx => {
  const { query, store } = ctx;
  store.dispatch(
    getSingleBusiness({
      _id: query._id
    })
  );
  return {};
};

export default BusinessDetailPage;
