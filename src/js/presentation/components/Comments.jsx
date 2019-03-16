// @flow
import React from 'react';
import Media from 'react-bulma-components/lib/components/media';
import Image from 'react-bulma-components/lib/components/image';
import Content from 'react-bulma-components/lib/components/content';
import Button from 'react-bulma-components/lib/components/button';
import Box from 'react-bulma-components/lib/components/box';
import { Textarea, Field, Control } from 'react-bulma-components/lib/components/form';

type Props = {};
type State = {
  commentValue: string
};
class CommentInput extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      commentValue: ''
    };
  }

  render() {
    const { commentValue } = this.state;
    return (
      <Media renderAs="article">
        <Media.Item position="left">
          <Image src="http://bulma.io/images/placeholders/128x128.png" size={32} renderAs="p" />
        </Media.Item>
        <Media.Item position="center">
          <Field>
            <Control renderAs="p">
              <Textarea
                onChange={event => {
                  this.setState({ commentValue: event.target.value });
                }}
                placeholder="Add a comment..."
                value={commentValue}
              />
            </Control>
          </Field>
          <Field>
            <Control renderAs="p">
              <Button>Post comment</Button>
            </Control>
          </Field>
        </Media.Item>
      </Media>
    );
  }
}

const CommentBlock = (props: { commentData: Object }) => {
  const { commentData } = props;
  return commentData.reduce((renderedComments, comment) => {
    renderedComments.push(
      <Media renderAs="article">
        <Media.Item position="left">
          <Image src="http://bulma.io/images/placeholders/128x128.png" size={32} renderAs="p" />
        </Media.Item>
        <Media.Item position="center">
          <Content>
            <p>
              <strong>{comment.user}</strong>
              <br />
              {comment.content}
            </p>
          </Content>
          {comment.replies.map(reply => {
            return <ReplyComment comment={reply} />;
          })}
        </Media.Item>
      </Media>
    );
    return renderedComments;
  }, []);
};

const ReplyComment = (props: Object) => {
  const { comment } = props;
  return (
    <Media>
      <Media.Item position="left">
        <Image src="http://bulma.io/images/placeholders/128x128.png" size={24} renderAs="p" />
      </Media.Item>
      <Media.Item position="center">
        <Content>
          <p>
            <strong>{comment.user}</strong>
            <br />
            {comment.content}
          </p>
        </Content>
        {comment.replies.map(reply => {
          return <ReplyComment comment={reply} />;
        })}
      </Media.Item>
    </Media>
  );
};

const Comments = (props: { commentData: Object }) => {
  const { commentData } = props;
  window.console.log(commentData);
  return (
    <Box>
      <CommentInput />
      <CommentBlock commentData={commentData} />
    </Box>
  );
};

export default Comments;
