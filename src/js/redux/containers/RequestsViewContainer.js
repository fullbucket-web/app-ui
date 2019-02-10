import { connect } from 'react-redux';
import RequestsView from '../../presentation/components/views/RequestsView';

const mapStateToProps = state => {
  return {
    requests: state.requests
  };
};

export default connect(
  mapStateToProps,
  null
)(RequestsView);
