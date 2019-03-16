// @flow
import React from 'react';
import Box from 'react-bulma-components/lib/components/box';
import Columns from 'react-bulma-components/lib/components/columns';
import Heading from 'react-bulma-components/lib/components/heading';
import Field from 'react-bulma-components/lib/components/form/components/field';
import Label from 'react-bulma-components/lib/components/form/components/label';
import Control from 'react-bulma-components/lib/components/form/components/control';
import Input from 'react-bulma-components/lib/components/form/components/input';
import Help from 'react-bulma-components/lib/components/form/components/help';
import Button from 'react-bulma-components/lib/components/button';
import Checkbox from 'react-bulma-components/lib/components/form/components/checkbox';
import GoogleButton from 'react-google-button';
import axios from 'axios';
import { loginUser } from '../../../core/helpers/httprequests';

type LoginState = {
  usernameInput: string,
  passwordInput: string,
  loginError: boolean
};

class LoginBox extends React.Component<Props, LoginState> {
  constructor() {
    super();
    this.state = {
      usernameInput: '',
      passwordInput: '',
      loginError: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const { usernameInput, passwordInput } = this.state;
    loginUser(usernameInput, passwordInput)
      .then(result => {
        
        this.setState({ loginError: false });
      })
      .catch(error => {
        this.setState({ loginError: true });
      });
  }

  render() {
    const { usernameInput, passwordInput, loginError } = this.state;
    return (
      <Box height={500}>
        <Heading size={2}>Login</Heading>
        <form onSubmit={this.onSubmit}>
          {loginError ? (
            <Heading subtitle size={5} style={{ color: "red" }}>
              Login Failed. Please check your details and try again.
            </Heading>
          ) : null}
          <Field>
            <Label>Username</Label>
            <Control>
              <Input
                type="text"
                placeholder="Username"
                value={usernameInput}
                onChange={event => {
                  this.setState({ usernameInput: event.target.value });
                }}
              />
            </Control>
          </Field>
          <Field>
            <Label>Password</Label>
            <Control>
              <Input
                type="password"
                required
                placeholder="Password"
                value={passwordInput}
                onChange={event => {
                  this.setState({ passwordInput: event.target.value });
                }}
              />
            </Control>
          </Field>
          <Button
            type="submit"
            style={{ width: '100%', height: 50, marginBottom: 10 }}
            color="info"
          >
            Login
          </Button>
        </form>
        <GoogleButton style={{ width: '100%' }} />
      </Box>
    );
  }
}

class SignupBox extends React.Component {
  constructor() {
    super();
    this.state = {
      usernameInput: '',
      emailInput: '',
      passwordInput: '',
      repeatPasswordInput: '',
      termsAndConditions: false,
      activeSearch: '',
      showAvailableUsername: false,
      usernameAvailable: false
    };
  }

  usernameTaken(username) {
    const { activeSearch } = this.state;
    if (username == '') {
      this.setState({ usernameAvailable: false, showAvailableUsername: false });
      clearTimeout(activeSearch);
    } else {
      this.setState({ showAvailableUsername: false });
      if (activeSearch) {
        clearTimeout(activeSearch);
      }
      this.setState({
        activeSearch: setTimeout(() => {
          axios({
            method: 'POST',
            url: 'http://localhost:10000/auth/local/username-available',
            data: { username }
          }).then(response => {
            console.log(response);
          });
          this.setState({ showAvailableUsername: true, usernameAvailable: true });
        }, 500)
      });
    }
  }

  render() {
    const {
      usernameInput,
      emailInput,
      passwordInput,
      repeatPasswordInput,
      termsAndConditions,
      usernameAvailable,
      showAvailableUsername
    } = this.state;
    return (
      <Box>
        <Heading subtitle size={3}>
          Create a FullBucket account
        </Heading>
        <Heading subtitle size={5}>
          Get access to tonnes more features to help you fill your bucket or help others fill
          theirs!
        </Heading>
        <Field>
          <Label>Username</Label>
          <Control>
            <Input
              type="text"
              placeholder="Be creative with your username!"
              value={usernameInput}
              onChange={event => {
                this.setState({ usernameInput: event.target.value });
                this.usernameTaken();
              }}
            />
            {showAvailableUsername && usernameInput != '' ? (
              <Help color={usernameAvailable ? 'success' : 'danger'}>
                {usernameAvailable ? (
                  <div>
                    Username <b>{usernameInput}</b>
{' '}
is available!
</div>
                ) : (
                  <div>
                    Username <b>{usernameInput}
{' '}
is taken.
</b>
                  </div>
                )}
              </Help>
            ) : null}
          </Control>
        </Field>
        <Field>
          <Label>Email</Label>
          <Control>
            <Input
              type="email"
              placeholder="Enter your email here."
              value={emailInput}
              onChange={event => {
                this.setState({ emailInput: event.target.value });
              }}
            />
          </Control>
        </Field>
        <Field>
          <Label>Password</Label>
          <Control>
            <Input
              type="password"
              placeholder="Enter your password - make it secure!"
              value={passwordInput}
              onChange={event => {
                this.setState({ passwordInput: event.target.value });
              }}
            />
          </Control>
        </Field>
        <Field>
          <Label>Password Repeat</Label>
          <Control>
            <Input
              type="password"
              placeholder="Please enter your password again."
              value={repeatPasswordInput}
              onChange={event => {
                this.setState({ repeatPasswordInput: event.target.value });
              }}
            />
          </Control>
        </Field>
        <Field>
          <Control>
            <Checkbox
              name="termsAccepted"
              onChange={event => {
                this.setState({ termsAndConditions: event.target.checked });
              }}
              checked={termsAndConditions}
            >
              {' '}
              I agree to the <a href="/legal">FullBucket terms and conditions</a>
            </Checkbox>
          </Control>
        </Field>
        <Button style={{ width: '100%' }} color="primary">
          Sign up!
        </Button>
      </Box>
    );
  }
}

class LoginView extends React.Component {
  render() {
    return (
      <Columns>
        <Columns.Column>
          <LoginBox />
        </Columns.Column>
        <Columns.Column>
          <SignupBox />
        </Columns.Column>
      </Columns>
    );
  }
}

export default LoginView;
