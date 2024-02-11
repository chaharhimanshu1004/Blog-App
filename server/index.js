const express = require('express')
const cors = require('cors');
const userRoute = require('./routes/User')
const postRoute = require('./routes/Post')
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

require('dotenv').config();


const app = express();
app.use(cookieParser());
app.use('/uploads', express.static('uploads'));

app.use(cors(
    {
        origin:["http://localhost:3000"],
        credentials:true,
    }
));

app.use(express.json());


mongoose.connect(process.env.MONGO_URI).then(()=>{console.log('DataBase is connected !!')}).catch((e)=>{console.log('Error in connecting database')})





const PORT = process.env.PORT || 6005



app.get('/', (req, res) => {
    res.send('Running !!!');
});
app.use('/api/users',userRoute)
app.use('/api/users',postRoute)


app.listen(PORT,()=>{
    console.log(`Server is running on Port: ${PORT}`)
})