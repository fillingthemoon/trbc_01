# Singapore Thomson Road Baptist Church Website

This website is live at https://trbc.herokuapp.com.

---

## Condensed Architecture of Application
![ ](https://trbcbucket.s3-ap-southeast-1.amazonaws.com/diagram.JPG)

## Frontend (client)
- React
- Redux
- AntDesign
- Linting: ESLint

## Backend (server)
- Node
- Express
- MongoDB Atlas
- mongoose
- Heroku
- jsonwebtoken
- Linting: ESLint

---

## Workflow for Contributors

### Setting Up Files
```
# Fork this repository (superproject) and clone your fork

$ cd trbc_01/
$ cd client/
$ npm install --force


# Fork the server submodule (trbc_01_server repository)

$ cd ../server
$ git init
$ git remote add origin <your-fork>.git
$ git pull origin master
$ npm install

$ cd ../
$ git add server
$ git commit -m 'commit message'
$ git push origin main

// Now your superproject fork's server directory should point to your submodule fork on Github. But if it doesn't, it is still fine and you may continue developing in these 2 git repositories separately, which are essentially the client and server.
``` 

### Starting Up Application
```
# Create a .env file with MONGODB_URI, PORT, and TOKEN information

$ cd ../client/
$ npm start
$ cd ../server/
$ npm run dev
```

### Deploying Application to Heroku
```
# Develop...

$ cd ../client/
$ npm run build
$ cp -r build ../server
$ cd ../server/
$ git add .
$ git commit -m 'commit message'
$ git push heroku master
```

### Pushing Your Changes to Your Forks
```
$ cd ../server/
$ git push origin master
$ cd ../client/
$ git add .
$ git commit -m 'commit message'
$ git push origin main

# Make your pull requests:
# - One PR for trbc_01
# - One PR for trbc_01_server
```

---

## Workflow for Collaborators

### Setting Up Files
```
$ git clone git@github.com:fillingthemoon/trbc_01.git
$ cd trbc_01/
$ git submodule init
$ git submodule update

$ cd client/
$ npm install --force
$ cd ../server/
$ npm install
```

### Starting Up application
```
# Create a .env file with MONGODB_URI, PORT, and TOKEN information

$ cd ..client/
$ npm start
$ cd ../server/
$ npm run dev

```

### Deploying Application to Heroku
```
# Develop...

$ cd ../client/
$ npm run build
$ cp -r build ../server
$ cd ../server/
$ git add .
$ git commit -m 'commit message'
$ git push heroku master
```

### Pushing Your Changes
```
$ cd ../server/
$ git push origin master
$ cd ../client/
$ git add .
$ git commit -m 'commit message'
$ git push origin main
```