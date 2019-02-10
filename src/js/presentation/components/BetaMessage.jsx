// @flow
import React from 'react';
import Message from 'react-bulma-components/lib/components/message';
import MessageHeader from 'react-bulma-components/lib/components/message/components/header';
import MessageBody from 'react-bulma-components/lib/components/message/components/body';

const BetaMessage = () => {
  return (
    <Message className="Beta-Message" color="danger">
      <MessageHeader>This site is in beta!</MessageHeader>
      <MessageBody>
        Some things may not work, some things may be buggy! If you encounter any problems, let the
        WebDev team know through a Modmail, message through the site or on the
        <strong> Website Bugs </strong>
        channel on discord! - /u/therealzohan
      </MessageBody>
    </Message>
  );
};

export default BetaMessage;
