//console.log(`It's work`)


//console.log("/\\/\\/\\/\\/\\/\\\/\\\/\\\/\\/\/\\/\//\///\/\/\/\//\//\/\\\\")



const express = require('express');
const { mdlwre } = require('./middleware/mdleware');


const app = express();
require('dotenv').config();
let PORT = process.env.PORT


app.get('/',mdlwre, (req, res) => {

                            res.json({
                                'msg': `${fullDetails}`
                            })
})

app.listen(PORT, () => {
    console.log(`this server is running ${PORT}`)
})