const express = require("express")
const mongoose = require("mongoose")
const router = require("./router/router")

const app = express()

app.use(express.json())
mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://Chanchal25-DB:ZHrSPQhp8HuOM2Yy@cluster0.ypi01as.mongodb.net/JaikrinaAssignment",
{useNewUrlParser: true})
.then(()=>console.log("Mongodb is connected"))
.catch(err=>console.log(err))

app.use('/', router);



app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
}) 