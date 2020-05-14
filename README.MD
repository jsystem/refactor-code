* Completed Refactor App


* Add Npm start for server.js (package.json)
npm install express
npm install morgan

 "scripts": {
    "start": "nodemon server.js"
  },

- Packages dependcy
 "dependencies": {
    "express": "^4.17.1",
    "morgan": "^1.10.0"
  },


- Optional
npm install nodemon --global
npm install nodemon --save-dev


* Data Files
	- dev-data > data > tours-simple.json


* Create Controllers (MVC)
Need exports all.
- Directory called controllers
- tourController.js
- userController.js
- Read tours-simple.json

* Create a routes
Are all location to acces from the client
http://192.168.0.110/api/v1/users/
http://192.168.0.110/api/v1/tours/
- tourRoutes.js
- userRoutes.js


* In app.js 
	- Modules
	- Export entry file app.js
	- Inporting routes
	- Use Middlewares
	- Mounting Routers

* Creating sever file
	- server.js
	- importing app.js
	- creat port
	- create server

STRUCTURE
.
├── app.js
├── controllers
│   ├── tourController.js
│   └── userController.js
├── dev-data
│   └── data
│       └── tours-simple.json
├── LICENSE
├── node_modules
├── package.json
├── package-lock.json
├── README.MD
├── routes
│   ├── tourRoutes.js
│   └── userRoutes.js
└── server.js