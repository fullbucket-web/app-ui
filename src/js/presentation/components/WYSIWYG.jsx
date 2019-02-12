// @flow
import React from 'react';
import { TrixEditor } from 'react-trix';
import Content from 'react-bulma-components/lib/components/content';

type Props = {};
type State = {
  html: string,
  text: string
};

class WYSIWYG extends React.Component<Props, State> {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    html: '',
    text: ''
  };

  handleChange(html, text) {
    this.setState({ html, text });
    window.console.log({ html, text });
  }

  render() {
    return (
      <Content>
        <TrixEditor
          onChange={this.handleChange}
          autoFocus
          placeholder="Let the words flow..."
          mergeTags={{
            trigger: '@',
            tags: [
              { name: 'Dominic St-Pierre', tag: '@dominic' },
              { name: 'John Doe', tag: '@john' }
            ]
          }}
        />
      </Content>
    );
  }
}

export default WYSIWYG;
