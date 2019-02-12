// @flow
import React from 'react';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Button from 'react-bulma-components/lib/components/button';
import Columns from 'react-bulma-components/lib/components/columns';
import WYSIWYG from '../WYSIWYG';

const Editor = (props: Object) => {
  return (
    <Container>
      <Button color="primary" className="back-button">
        Back
      </Button>
      <Heading>Editing - "Update 2"</Heading>
      <div className="editor-container">
        <WYSIWYG />
      </div>
      <Columns>
        <Columns.Column offset={6} size={2}>
          <Button size="large" color="danger" fullwidth>
            Delete
          </Button>
        </Columns.Column>
        <Columns.Column size={2}>
          <Button size="large" color="info" fullwidth>
            Save
          </Button>
        </Columns.Column>
        <Columns.Column size={2}>
          <Button size="large" color="success" fullwidth>
            Publish
          </Button>
        </Columns.Column>
      </Columns>
    </Container>
  );
};

export default Editor;
