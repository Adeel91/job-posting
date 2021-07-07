# Available Scripts

<hr />

In the project root directory, you can run the below commands to run, build and test the application.

### `yarn start`

In order to run the app locally (in the development mode), you can just type `yarn start` in the terminal and press <kbd>Enter</kbd>, and the command will open the application automatically in your default browser.

The app will open in the browser at http://localhost:8080.

If you make any changes in the code, the webpage will automatically update the changes without refreshing the page manually. Also, lint errors can be seen in the console.

### `yarn run build:staging`

This command is using the production environment settings but the output file of the webpack is different from the webpack.prod.config.js.

The purpose of `build:staging` is to build the project locally and also run the application through static file by double clicking `./build/index.html`

**P.S.** Just keep in mind, if you really want to run this command then firstly replace the `BrowserRouter` to `HashRouter` inside `./src/index.js` because `BrowserRouter` doesn't support routing to static files.

### `yarn run build:production`

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build will be minified, and the app is ready to be deployed!

## E2E Testing

<hr />

### `yarn cypress`

Opens the cypress interface to execute tests. But, firstly make sure the app is already running on http://localhost:8080

### `yarn run cypress:chrome`

Runs test in a Chrome browser directly

### `yarn run cypress:edge`

Runs test in a Microsoft Edge browser

### `yarn run cypress:firefox`

Runs test in a Mozilla Firefox browser

### `yarn run cypress:ci`

This command will open the application in the browser at http://localhost:8080 and run all tests in the terminal automatically.

### `yarn run prettier`

It will indent and make the code pretty based on the configuration

**Note: I am currently using `yarn` but `npm` commands can also be used to open the app. Furthermore, I have `Node v15.12.0` and `Npm 7.6.3` on my local machine.**

# Docker Setup

<hr />

This app can also possibly run in the docker container.

### Prerequisites

Please make sure you already installed Docker Engine (if using mac or windows especially).

In case, docker is not installed then you could refer to this link https://docs.docker.com/docker-for-mac/install/ (for mac users)

Using docker will allow you to run the application without installing Node/Npm or Nginx server or downgrading/upgrading the Node version, because all dependencies will exist inside the docker images.

```html
$ docker -v
Docker version 20.10.6, build 370c289
```

### Repository Cloning

Once docker is installed on your local machine, you can start cloning the repository by using HTTPS or SSH

```html
git clone https://github.com/Adeel91/job-posting.git
cd job-posting
```

### Build and Run Docker

Now, you are ready to build the application on docker, and run the docker image at 8080 port.

```html
docker build -t job-posting .
docker run -d -p 8080:8080 job-posting
```

Open up the browser and enter this URL: http://localhost:8080
