# restaurant-api

<b>Description:</b> 
<br>demo project on nodejs with express,mongodb and postman. <br>
<br>Project is about crud operations on restaurant and products inside it.
<br>files has src folder which contain all the code:
<br>src/db/mongoose.js => contains database connectivity code
<br>models => conatins 2 file restaurant-model and product-model which have schema of restaurant and product respectively.
<br>routers => contains 2 file restaurant-router and product-router which have code of all the CRUD operations on restaurant and product respectively.
<br>index.js=> It is the main file which connect all the code and it is use to run the whole project.

<b>Installation:</b>
<br> clone the api in the folder, <br>
<br>open the folder in the editor and run "npm install" in the terminal to the path of the folder.<br>
<br> "https://www.getpostman.com/collections/c44b799bd20af12247b6" import this link in the postman to run all the commands.<br>

<br>
<b>Usage:</b> 
<br>connect to mongodb
<br>oepn postman app
<br>connect to robo 3t or mongodb compass 
<br>run "npm run dev" on the terminal in the editor

<br><b>Run the above commands in the postman to interact with the api:</b>
<br>use the above postman link to setup all the commands

<br>Create restaurant: To create a restaurant document with fields: name,address,picture,openinghours 
<br>Read restaurants : To read all restaurants
<br>update restaurant: To update existing restaurant with the objectID 
<br>delete restaurant: To delete existing restaurant with the ObjectID

<br>Create product: To create a product document with fields: name,price,photo,category,ownerid 
<br>Read products : To read all products of respective restaurant
<br>update product: To update existing product with the objectID 
<br>delete delete: To delete existing product with the ObjectID
