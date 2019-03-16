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
  text: string,
  editing: boolean
};

class WYSIWYG extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    const { html } = this.props;
    this.state = {
      html
    };
  }

  handleChange = (html: string) => {
    clearTimeout(this.saveTimeout);
    this.setState({ html });
    this.saveTimeout = setTimeout(() => {
      notify.show('Saved!', 'success', 1500);
    }, 1000);
  };

  handleChange: Function;

  saveTimeout: TimeoutID;

  render() {
    const { html } = this.state;
    return (
      <Content>
        <TrixEditor
          onChange={this.handleChange}
          autoFocus
          value={html}
          placeholder="Let the words flow..."
        />
      </Content>
    );
  }
}

export default WYSIWYG;
