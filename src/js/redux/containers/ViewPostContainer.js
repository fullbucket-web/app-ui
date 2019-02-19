// @flow
import { connect } from 'react-redux';
import ViewPost from '../../presentation/components/pages/ViewPost';
import { closePostModal } from '../actions/uiActions';

const mapStateToProps = state => {
  return {
    news: state.news,
    postId: state.ui.postModal.postId,
    isOpen: state.ui.postModal.active
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closePost: delay => {
      dispatch(closePostModal(delay));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewPost);
