import React from "react";

import BusinessDetail from "../../src/features/businessDetail/businessDetail.container";

const BusinessDetailPage = ({ _id }) => <BusinessDetail _id={_id} />;

BusinessDetailPage.getInitialProps = async ctx => {
  const { query, store } = ctx;
  console.log("query", query);
  return {
    _id: query._id
  };
};

export default BusinessDetailPage;
