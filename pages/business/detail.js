import React from "react";

import BusinessDetail from "../../src/features/businessDetail/businessDetail.container";
import { getSingleBusiness } from "../../src/features/businessDetail/businessDetail.action";

const BusinessDetailPage = ({ _id }) => <BusinessDetail _id={_id} />;

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
