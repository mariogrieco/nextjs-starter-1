import { connect } from "react-redux";

import BusinessCreate from "../../components/business/create.component";
import { createBusiness } from "../../actions/business.action";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  createBusiness: ({ name, description }) =>
    dispatch(createBusiness({ name, description }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessCreate);
