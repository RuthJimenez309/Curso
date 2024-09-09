import express  from 'express';
import dotenv  from 'dotenv';

import { connectDB } from './bd/connectDB.js';
const app = express();


dotenv.config();

app.get('/', (req, res) => {
    res.send('Hello  mondo!');
});

app.listen(3000, () => {
   connectDB()
    console.log('Server running on port 3000')

});


//mongodb+srv://jimenezruth81:Njk1J2VJTTqdRtXo@cluster0.wrwg7.mongodb.net/

