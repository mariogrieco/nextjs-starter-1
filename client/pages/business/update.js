import React from "react";

import UpdateBusiness from "../../src/features/business/update/updateBusiness.container";
import { getSingleBusiness } from "../../src/features/business/detail/businessDetail.action";

const UpdateBusinessPage = () => <UpdateBusiness />;

UpdateBusinessPage.getInitialProps = async ctx => {
  const { query, store } = ctx;
  store.dispatch(
    getSingleBusiness({
      _id: query._id
    })
  );
  return {};
};

export default UpdateBusinessPage;
