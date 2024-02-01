const express = require('express')
const cors = require('cors');
const userRoute = require('./routes/User')
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();

mongoose.connect(process.env.MONGO_URI).then(()=>{console.log('DataBase is connected !!')}).catch((e)=>{console.log('Error in connecting database')})



app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 6005
app.use(express.json());



app.get('/', (req, res) => {
    res.send('Running !!!');
});
app.use('/api/users',userRoute)


app.listen(PORT,()=>{
    console.log(`Server is running on Port: ${PORT}`)
})