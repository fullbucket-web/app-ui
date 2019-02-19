// @flow
import React from 'react';
import Media from 'react-bulma-components/lib/components/media';
import Image from 'react-bulma-components/lib/components/image';
import Content from 'react-bulma-components/lib/components/content';
import Button from 'react-bulma-components/lib/components/button';
import Box from 'react-bulma-components/lib/components/box';
import { Textarea, Field, Control } from 'react-bulma-components/lib/components/form';

class CommentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  render() {
    const { value } = this.state;
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
                  this.setState({ value: event.target.value });
                }}
                placeholder="Add a comment..."
                value={value}
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

type Props = {
  commentData: Object
};

const CommentBlock = (props: Object) => {
  const { commentData } = props;
  const comments = [];
  commentData.map(comment => {
    comments.push(
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
  });
  return comments;
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

const Comments = (props: Props) => {
  const { commentData } = props;
  window.console.log(commentData);
  return (
    <Box>
      <CommentInput />
      <CommentBlock commentData={commentData} />
      {/* })} */}
      {/* <Media renderAs="article">
        <Media.Item position="left">
          <Image src="http://bulma.io/images/placeholders/128x128.png" size={32} renderAs="p" />
        </Media.Item>
        <Media.Item position="center">
          <Content>
            <p>
              <strong>Barbara Middleton</strong>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec
              ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit
              rutrum. Nunc in tempus turpis.
              <br />
              <small>
                <a>Like</a> ·<a>Reply</a> · 3 hrs
              </small>
            </p>
          </Content>

          <Media>
            <Media.Item position="left">
              <Image src="http://bulma.io/images/placeholders/128x128.png" size={24} renderAs="p" />
            </Media.Item>
            <Media.Item position="center">
              <Content>
                <p>
                  <strong>Sean Brown</strong>
                  <br />
                  Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi
                  tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit
                  nisl a nulla sagittis, a lobortis leo feugiat.
                  <br />
                  <small>
                    <a>Like</a> ·<a>Reply</a> · 2 hrs
                  </small>
                </p>
              </Content>

              <Media>
                Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus
                ullamcorper sit amet nec massa.
              </Media>

              <Media>
                Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada
                metus sed pharetra euismod. Cras tellus odio, tincidunt iaculis diam non, porta
                aliquet tortor.
              </Media>
            </Media.Item>
          </Media>

          <Media>
            <Media.Item position="left">
              <Image src="http://bulma.io/images/placeholders/96x96.png" size={24} renderAs="p" />
            </Media.Item>
            <Media.Item position="center">
              <Content>
                <p>
                  <strong>Kayli Eunice </strong>
                  <br />
                  Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius
                  felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus
                  lacinia non nisl id feugiat.
                  <br />
                  <small>
                    <a>Like</a> ·<a>Reply</a> · 2 hrs
                  </small>
                </p>
              </Content>
            </Media.Item>
          </Media>
        </Media.Item>
      </Media> */}
    </Box>
  );
};

export default Comments;
