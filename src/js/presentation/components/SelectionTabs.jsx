// @flow
import React from 'react';
import Tabs from 'react-bulma-components/lib/components/tabs';
import Tab from 'react-bulma-components/lib/components/tabs/components/tab';
import * as TabNames from '../../core/constants/tabNames';

type Props = {
  activeTab: string
};

const SelectionTabs = (props: Props) => {
  const { activeTab } = props;
  return (
    <Tabs className="Tabs__mainpage">
      <Tab active>Requests</Tab>
      <Tab active={(activeTab === TabNames.REQUESTS_TAB).toString()}>Offers</Tab>
    </Tabs>
  );
};

export default SelectionTabs;
