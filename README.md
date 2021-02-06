# weather-forecast

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=hckhanh_weather-forecast&metric=alert_status)](https://sonarcloud.io/dashboard?id=hckhanh_weather-forecast)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements

- Node v14.5.4
- Yarn v1.22.10
- A proxy server to bypass CORS problem of [metaweather.com](https://www.metaweather.com/api/) (public-apis/public-apis#644)

> For the proxy server, you can use https://github.com/Rob--W/cors-anywhere

## Configurations

| Variable               | Default | Description                 |
| ---------------------- | :-----: | --------------------------- |
| REACT_APP_PROXY_SERVER |         | Proxy server to bypass CORS |

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
