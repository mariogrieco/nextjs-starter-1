import React from "react";

import ShowBusiness from "../../src/features/business/show/showBusiness.component";
import { getSingleBusiness } from "../../src/features/business/business.action";

const ShowBusinessPage = () => <ShowBusiness />;

ShowBusinessPage.getInitialProps = async ctx => {
  const { query, store } = ctx;
  store.dispatch(
    getSingleBusiness({
      _id: query._id
    })
  );
  return {};
};

export default ShowBusinessPage;
