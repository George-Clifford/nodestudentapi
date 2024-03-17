const express =require ('express');
const app = express();
const studentRoutes =require("./Routes/studentRoutes");
require( 'dotenv').config();
require("./Model/dbConnect");

app.use(express.json());
app.use(express.urlencoded( { extended: true })); // middleware
app.use('/api/student',studentRoutes);
app.listen(process.env.port || 4000 , function (){
    console.log('Now listening for requests on:http://localhost:4000');
});