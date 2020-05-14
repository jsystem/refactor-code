* Completed Refactor App

* Create Controllers (MVC)
Need exports all.
- Directory called controllers
- tourController.js
- userController.js


* Create a routes
Are all location to acces from the client
http://192.168.0.110/api/v1/users/
http://192.168.0.110/api/v1/tours/
- tourRoutes.js
- userRoutes.js

* In app.js 
	- Inporting routes
	- Use Middlewares
	- Mounting Routers
	- export entry file app.js

* Creating sever file
	- server.js
	- importing app.js
	- creat port
	- create server


- Create Sever Express in one file server.js


- Add Npm start for server.js (package.json)
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