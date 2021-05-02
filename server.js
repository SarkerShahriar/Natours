const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');


const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)

mongoose.connect(DB, {
    useNewUrlParser : true,
    useCreateIndex : true,
    useFindAndModify : true,
    useUnifiedTopology: true
}).then(() => console.log("DB CONNECTION SUCCESSFUL"));


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`App running on port ${port}...`)
});

// test