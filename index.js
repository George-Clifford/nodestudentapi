const express =require ('express');
const app = express();
const studentRoutes =require("./Routes/studentRoutes");
const courseRoutes =require('./Routes/courseRoutes');
const registrationRoutes = require('./Routes/registrationRoutes');

require( 'dotenv').config();
require("./Model/dbConnect");

app.use(express.json());
app.use(express.urlencoded( { extended: true })); // middleware

app.use('/api/course', courseRoutes)
app.use('/api/courses',courseRoutes)
app.use('/api/student', studentRoutes)
app.use('/api/students', studentRoutes)
app.use('/api/user', registrationRoutes)
app.use('/api/users', registrationRoutes)


// handling 404 error
app.use(async(req, res, next)=>{
    next(createError.NotFound())
})

// Error handling middleware
app.use((err, req, res, next)=>{
    if (err.status === 401){
        // handle 401 Unauthorized error
        res.status(401).send({
            error:{
                status: 401,
                message: "Unauthorized: Invalid username or password"
            }
        });
    }else {
        // Handle other errors
        res.status(err.status || 500).send({
            error:{
                status: err.status || 500,
                message: err.message || "Internal Server Error"
            }
        })
    }
},
)


app.listen(process.env.port || 4000 , function (){
    console.log('Now listening for requests on:http://localhost:4000');
});