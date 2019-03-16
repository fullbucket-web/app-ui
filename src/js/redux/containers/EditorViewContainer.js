// @flow
import { connect } from 'react-redux';
import Editor from '../../presentation/views/EditorView';

const mapStateToProps = state => {
  return {
    editorState: state.editor.activeDocument
  };
};

export default connect(
  mapStateToProps,
  null
)(Editor);
