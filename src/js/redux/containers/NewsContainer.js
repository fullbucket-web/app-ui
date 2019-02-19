// @flow
import { connect } from 'react-redux';
import News from '../../presentation/components/News';
import { openPostModal } from '../actions/uiActions';

const mapStateToProps = state => {
  return {
    news: state.news
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openPost: id => {
      dispatch(openPostModal(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
