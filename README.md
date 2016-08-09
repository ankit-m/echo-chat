Echo Chat
=========

A chat application which just repeats what you say. More like an annoying baby. That's pretty much it. You can add friends and chat with them, if you like to call it that.

### Installation

Clone the project and run `npm install`.

### Architecture

The app contains two main components - Sidebar and Chatbox. Both of these communicate with the localStorage (which acts as a local database). They communicate via routeParams (`userId`). The database contains one key `friendList` - an object which contains the details (`name` and `image`) of all the friends along with their unique key (`GUID`). The other objects in the database have this GUID as their key and contain message information for each friend (`{ name, messages (Array) }`).

The `components` folder contains all the React components. The components which have subcomponents are in a folder. The `index.js` in each folder refers the the topmost component.

### Dependencies

You need to have node (> **4.4.3**) and npm (> **3.10.5**) installed.

### Folder Structure

```
.
├── dist                        # production code
├── app
│   ├── assets                  # static components
│   ├── components              # react components
│   ├── config                  # contains config files - routes.js
│   ├── utils                   # helper functions
│   ├── index.js                # root component of the app
└── package.json
└── .babelrc                    # babel config file
└── .eslintrc                   # eslint config file
└── webpack.config.js           # webpack config file

```

### Running the App

```bash
npm start
```
This will start the app on `localhost:8080`

### Running the tests

```bash
npm test
```

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```
