const express = require('express')
const cors = require('cors');
const userRoute = require('./routes/User')
const mongoose = require('mongoose');

require('dotenv').config();


const app = express();
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


app.listen(PORT,()=>{
    console.log(`Server is running on Port: ${PORT}`)
})