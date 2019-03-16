// @flow
import React from 'react';
import Content from 'react-bulma-components/lib/components/content';
import Columns from 'react-bulma-components/lib/components/columns';
import HtmlToReactParser from 'html-to-react/lib/parser';
import Modal from 'react-modal';
import Button from 'react-bulma-components/lib/components/button';
import Comments from '../components/Comments';
import {
  NOT_FOUND_POST_TITLE,
  NOT_FOUND_POST_HELP,
  NOT_FOUND_POST_TRY_AGAIN
} from '../../core/constants/uiStrings';

type Props = {
  news: Object,
  isOpen: boolean,
  closePost: Function,
  postId: string
};

export default class ViewPost extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.getPost = this.getPost.bind(this);
  }

  getPost() {
    const { news, postId } = this.props;
    if (!postId) {
      return {
        found: false,
        html: (
          <div>
            <h1>{NOT_FOUND_POST_TITLE}</h1>
            <h4>{NOT_FOUND_POST_HELP}</h4>
            <h4>{NOT_FOUND_POST_TRY_AGAIN}</h4>
          </div>
        )
      };
    }
    const foundPost = news.find(value => {
      if (value.id === postId) {
        return value;
      }
      return false;
    });
    if (foundPost === false) {
      return {
        found: false,
        html: (
          <div>
            <h1>{NOT_FOUND_POST_TITLE}</h1>
            <h4>{NOT_FOUND_POST_HELP}</h4>
            <h4>{NOT_FOUND_POST_TRY_AGAIN}</h4>
          </div>
        )
      };
    }
    const htmlParser = new HtmlToReactParser();
    return { found: true, html: htmlParser.parse(foundPost.html), foundPost };
  }

  render() {
    const post = this.getPost();
    const { isOpen, closePost } = this.props;
    window.console.log(this.props);
    return (
      <Modal
        className="slide-pane slide-pane_from_bottom"
        isOpen={isOpen}
        contentLabel="Modal"
        overlayClassName="slide-pane__overlay"
        closeTimeoutMS={500}
      >
        <Columns>
          <Columns.Column size={8}>
            <Button
              color="dark"
              size="medium"
              className="slide-pane__close"
              onClick={() => closePost()}
            >
              Close
            </Button>
            <Content>{post.html}</Content>
            {!post.found ? null : <Comments commentData={post.foundPost.comments} />}
          </Columns.Column>
          {!post.found ? null : (
            <Columns.Column size={4}>
              <Content className="post-about-author">
                <h3>{post.foundPost.author.name}</h3>
              </Content>
            </Columns.Column>
          )}
        </Columns>
      </Modal>
    );
  }
}
