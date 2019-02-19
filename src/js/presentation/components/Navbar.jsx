// @flow
import React from 'react';
import Navbar from 'react-bulma-components/lib/components/navbar';
import NavbarBrand from 'react-bulma-components/lib/components/navbar/components/brand';
import NavbarItem from 'react-bulma-components/lib/components/navbar/components/item';
import { Link } from 'react-router-dom';
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
      <div>
        <Navbar color="primary" fixed="top" active={open}>
          <NavbarBrand>
            <NavbarItem className="Navbar-Title">{NAVBAR_TITLE}</NavbarItem>
            <Navbar.Burger active={open.toString()} onClick={this.handleClick} />
          </NavbarBrand>
          <Navbar.Menu active={open.toString()}>
            <Navbar.Container>
              <Link to="/">
                <Navbar.Item className="router-navbar-link router-navbar-link__active">
                  Home
                </Navbar.Item>
              </Link>
              <Link to="/editor">
                <Navbar.Item className="router-navbar-link">Editor</Navbar.Item>
              </Link>
              <Link to="/legal">
                <Navbar.Item className="router-navbar-link">Legal</Navbar.Item>
              </Link>
            </Navbar.Container>
            <Navbar.Container position="end">
              <Navbar.Item href="#">Signed in as MegaUltraSonic</Navbar.Item>
            </Navbar.Container>
          </Navbar.Menu>
        </Navbar>
      </div>
    );
  }
}
export default FullBucketNavbar;
