//import the module
import express from 'express';

const app = express();
const PORT = 3000;

//middleware
app.use(express.json());

let items = [
    {id: 1, name: 'Laptop', price: 1000},
    {id: 2, name: 'Ring', price: 20}
];

let id = 3;

app.get('/first', (req, res) => {
    res.send("Connect to server!");
});

app.get('/second', (req, res) => {
    res.send("This is the other API!");
});

app.get('/items', (req, res) => {
    res.status(200).json(items)
});

app.post('/items', (req, res) => {
    let newItem = {
        id: id++,
        name: req.body.name,
        price: req.body.price
    }
    if (!newItem.name || typeof newItem.price !== 'number' || newItem.price <= 0){
        return res.status(400).json({message: "Name and positive Price are required!"});
    }
    items.push(newItem);
    res.status(200).json(newItem);
    console.log(`${newItem.name} added`);

});

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
  console.log("Press Ctrl+C to stop the server!");
});