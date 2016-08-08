Echo Chat
=========

A chat application which just repeats what you say. More like an annoying baby. That's pretty much it. You can add friends and chat with them, if you like to call it that.

### Installation

Clone the project and run `npm install`.

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

`npm start`

This will start the app on `localhost:8080`

### Running the tests

`npm test`.

### Build

`npm run build`

### Lint

`npm run lint`
