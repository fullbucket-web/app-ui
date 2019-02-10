# FullBucket Web UI

This is the Web UI frontend for the FullBucket website. It uses React for the front-end rendering with Redux as a session store. It also uses some components from React Bulma Components. Additional information can be found in the links below.

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [React-Redux](https://github.com/reduxjs/react-redux)
- [Webpack](https://webpack.js.org/)
- [react-bulma-components](https://www.npmjs.com/package/react-bulma-components)

## Local UI Development

1. Clone the repository `git clone https://github.com/fullbucket-web/app-ui.git`
2. Run a `yarn install` or `npm install`. I'm using Yarn.
3. Run `yarn run dev` to start the Webpack development server.

## Deploying to Heroku
**BEFORE DEPLOYING TO HEROKU ENSURE THAT ALL TESTS ARE PASSING**
1. Run a fresh production build by running `yarn build`.
2. Commit your changes, including the new production webpack bundle (and CSS, if changes have been made)
3. Merge your branch into master, then start a new deployment through the Heroku CLI or Heroku web console.

*Note: if multiple developers start working on this project, git flow will be setup to better manage different pieces of work.*

#### Notes

For now, the Redux app state is going to be mocked out to "emulate" an active user session. Once the front-end is complete and people are happy with it, we will look at implementing the back end API that the app will connect to.

## Contributing

I'd recommend using Visual Studio Code as an IDE. Make sure you install ESLint and Prettier as extensions to get the additional linting and auto-formatting support.

Contributions are welcome! But there are a few conditions:

- Code must comply to the Airbnb style. To make this super-easy, use ESLint and Prettier to both lint your code and auto-fix many issues.
- All tests must pass, including coverage.
