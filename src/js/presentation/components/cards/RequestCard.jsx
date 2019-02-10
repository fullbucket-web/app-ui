// @flow
import React from 'react';
import Media from 'react-bulma-components/lib/components/media';
import Content from 'react-bulma-components/lib/components/content';
import Button from 'react-bulma-components/lib/components/button';
import Level from 'react-bulma-components/lib/components/level';
import Box from 'react-bulma-components/lib/components/box';

type Props = {
  request: Object
};

const RequestCard = (props: Props) => {
  const { request } = props;
  return (
    <Box className="Request-Card">
      <Media>
        <Media.Item>
          <Content>
            <p>
              <h5>{request.title}</h5>
              <small>
                Posted By
                {` ${request.user}`}
              </small>
              <hr />
              {request.content.split(/\n/g).map(value => (
                <p>{value}</p>
              ))}
            </p>
          </Content>
          <Level breakpoint="mobile">
            <Level.Side align="left">
              <Button link>Like</Button>
              <Button link>Share</Button>
            </Level.Side>
            <Level.Side align="right">
              <p>{`${request.points} Points`}</p>
            </Level.Side>
          </Level>
        </Media.Item>
      </Media>
    </Box>
  );
};

export default RequestCard;
