const express = require('express');
const app = express();
const mongoose =require('mongoose');
const route= require('./route/route')


app.use(express.json());

mongoose.connect('mongodb+srv://Aman_Mohadikar:V5FW1Y8X6b2pIiud@cluster0.gdww84s.mongodb.net/project-3', {useNewUrlParser: true}, mongoose.set('strictQuery', false))
.then(() => {console.log("MongoDb is Connected")})
.catch((err) => { console.log(err.message)})

app.use("/", route)
app.listen(process.env.PORT || 3000, () => {
     console.log("Express app running on PORT " + (3000 || process.env.PORT))
})