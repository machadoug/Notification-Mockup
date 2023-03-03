# Notification-Mockup

A Vuetify.js / Express.js (Node.js) Notification Mockup application.


# Setup requirements
* [Node.js](https://nodejs.org/en/) - You must at least have **NODE version 8.2.1**
* [Yarn](https://classic.yarnpkg.com/en/)
* npm is required and it's installed automatically with node.js

# Setup instructions
* Clone this [Git repository](https://github.com/machadoug/Notification-Mockup)
* Open two terminal windows

### Client - Terminal A
```
cd client
yarn
yarn dev
```

### Server - Terminal B
```
cd server
npm install
npm start
```
In order to seed the database run:
```
npm run seed
```

## Features
* Adding a new `/server/src/providers/` class will automatically enable this new provider
* For simplicity reasons we're using SQLite