// @flow
import { connect } from 'react-redux';
import Editor from '../../presentation/components/pages/Editor';

const mapStateToProps = state => {
  return {
    editorState: state.editor.activeDocument
  };
};

export default connect(
  mapStateToProps,
  null
)(Editor);
