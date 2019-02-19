// @flow
import React from 'react';
import Heading from 'react-bulma-components/lib/components/heading';
import Button from 'react-bulma-components/lib/components/button';
import Columns from 'react-bulma-components/lib/components/columns';
import WYSIWYG from '../WYSIWYG';
import {
  EDITOR_BACK_BUTTON,
  EDITOR_DELETE_BUTTON,
  EDITOR_SAVE_BUTTON,
  EDITOR_PUBLISH_BUTTON
} from '../../../core/constants/uiStrings';

type editorStateType = {
  html: string
};

type Props = {
  editorState: editorStateType
};

const Editor = (props: Props) => {
  const { editorState } = props;
  return (
    <div>
      <Button color="primary" className="back-button">
        {EDITOR_BACK_BUTTON}
      </Button>
      <Heading>{`Editing - ${editorState.title}`}</Heading>
      <div className="editor-container">
        <WYSIWYG html={editorState.html} />
      </div>
      <Columns>
        <Columns.Column offset={6} size={2}>
          <Button size="large" color="danger" fullwidth>
            {EDITOR_DELETE_BUTTON}
          </Button>
        </Columns.Column>
        <Columns.Column size={2}>
          <Button size="large" color="info" fullwidth>
            {EDITOR_SAVE_BUTTON}
          </Button>
        </Columns.Column>
        <Columns.Column size={2}>
          <Button size="large" color="success" fullwidth>
            {EDITOR_PUBLISH_BUTTON}
          </Button>
        </Columns.Column>
      </Columns>
    </div>
  );
};

export default Editor;
