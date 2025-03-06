import express from 'express';
import { connectDB } from './config/database';
var cors = require('cors');
const productRoute = require("../src/routes/productRoute");

const app = express();
const PORT = process.env.PORT || 4000; 

app.use(cors());
// To parse Array to json
app.use(express.json());

app.use('/api', productRoute);

app.get('/',(req: any, res: any) => {
    res.send("Welcome to Ice Cream Shop APIs");
})

app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server running on port ${PORT}`);
})


