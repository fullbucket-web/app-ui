// @flow
import React from 'react';
import { TrixEditor } from 'react-trix';
import Content from 'react-bulma-components/lib/components/content';
import { notify } from 'react-notify-toast';

type Props = {
  html: string
};
type State = {
  html: string,
  text: string
};

class WYSIWYG extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    const { html } = this.props;
    this.state = {
      html,
      text: '',
      editing: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(html, text) {
    clearTimeout(this.saveTimeout);
    this.setState({ html, text, editing: true });
    window.console.log(JSON.stringify(html));
    this.saveTimeout = setTimeout(() => {
      notify.show('Saved!', 'success', 1500);
    }, 1000);
  }

  render() {
    const { html } = this.state;
    const mergeTags = [
      {
        trigger: '@',
        tags: [{ name: 'Dominic St-Pierre', tag: '@dominic' }, { name: 'John Doe', tag: '@john' }]
      }
    ];
    return (
      <Content>
        <TrixEditor
          onChange={this.handleChange}
          autoFocus
          value={html}
          placeholder="Let the words flow..."
          mergeTags={mergeTags}
        />
      </Content>
    );
  }
}

export default WYSIWYG;
