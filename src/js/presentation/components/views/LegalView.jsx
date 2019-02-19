import React from 'react';
import Content from 'react-bulma-components/lib/components/content';
import * as legal from '../../../core/constants/legal';

const LegalView = () => {
  return (
    <div>
      <Content className="content-container">
        <h2>{legal.TOS_TITLE}</h2>
        <h3>{legal.TOS_TERMS_TITLE}</h3>
        <p>{legal.TOS_TERMS_CONTENT}</p>
        <h3>{legal.TOS_LICENSE_TITLE}</h3>
        <ol type="a">
          <li>
            {legal.TOS_LICENSE_CONTENT}
            <ol type="i">
              {legal.TOS_LICENSE_LIST.map(condition => {
                return <li>{condition}</li>;
              })}
            </ol>
          </li>
          <li>{legal.TOS_LICENSE_BREACH}</li>
        </ol>
        <h3>{legal.TOS_DISCLAIMER_TITLE}</h3>
        <ol type="a">
          <li>{legal.TOS_DISCLAIMER_PARA_1}</li>
          <li>{legal.TOS_DISCLAIMER_PARA_2}</li>
        </ol>
        <h3>{legal.TOS_LIMITS_TITLE}</h3>
        <p>{legal.TOS_LIMITS_CONTENT}</p>
        <h3>{legal.TOS_ACCURACY_TITLE}</h3>
        <p>{legal.TOS_ACCURACY_CONTENT}</p>
        <h3>{legal.TOS_LINKS_TITLE}</h3>
        <p>{legal.TOS_LINKS_CONTENT}</p>
        <h3>{legal.TOS_MODS_TITLE}</h3>
        <p>{legal.TOS_MODS_CONTENT}</p>
        <h3>{legal.TOS_GOV_LAW_TITLE}</h3>
        <p>{legal.TOS_GOV_LAW_CONTENT}</p>
      </Content>
      <Content className="content-container">
        <h2>{legal.PRIV_TITLE}</h2>
        {legal.PRIV_PARAGRAPHS.map(paragraph => {
          return <p>{paragraph}</p>;
        })}
      </Content>
    </div>
  );
};

export default LegalView;
