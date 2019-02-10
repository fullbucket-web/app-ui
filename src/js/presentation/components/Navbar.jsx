// @flow
import React from 'react';
import Navbar from 'react-bulma-components/lib/components/navbar';
import NavbarBrand from 'react-bulma-components/lib/components/navbar/components/brand';
import NavbarItem from 'react-bulma-components/lib/components/navbar/components/item';
import { NAVBAR_TITLE } from '../../core/constants/uiStrings';

type Props = {};
type State = {
  open: boolean
};

class FullBucketNavbar extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      open: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    const { open } = this.state;
    this.setState({ open: !open });
  };

  render() {
    const { open } = this.state;
    return (
      <Navbar color="info" fixed="top" active={open}>
        <NavbarBrand>
          <NavbarItem className="Navbar-Title">{NAVBAR_TITLE}</NavbarItem>
          <Navbar.Burger active={open} onClick={this.handleClick} />
        </NavbarBrand>
        <Navbar.Menu active={open}>
          <Navbar.Container>
            <Navbar.Item href="#">Home</Navbar.Item>
          </Navbar.Container>
          <Navbar.Container position="end">
            <Navbar.Item href="#">Signed in as /u/MegaUltaSonic</Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    );
  }
}
export default FullBucketNavbar;
