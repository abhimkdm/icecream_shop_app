var express = require('express');
const productRoute = require("../src/routes/productRoute");

const app = express();
const PORT = 5000; 

// To parse Array to json
app.use(express.json());

app.use('/api', productRoute);

app.get('/',(req: any, res: any) => {
    res.send("Welcome to Ice Cream Shop APIs");
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})


