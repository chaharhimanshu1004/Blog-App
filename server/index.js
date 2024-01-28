const express = require('express')
const cors = require('cors');
require('dotenv').config();


const app = express();


app.use(cors())
app.use(express.json());


const PORT = process.env.PORT || 6005
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Running !!!');
});


app.listen(PORT,()=>{
    console.log(`Server is running on Port: ${PORT}`)
})