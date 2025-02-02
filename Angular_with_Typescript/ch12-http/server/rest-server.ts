import * as express from "express";
import { AddressInfo } from "net";

// [1] node app that serves a Product[]

const app = express();

interface Product {
    id: number,
    title: string,
    price: number
}

const products: Product[] = [
    { id:0, title: "First Product", price: 24.99 },
    { id:1, title: "Second Product", price: 64.99 },
    { id:2, title: "Third Product", price: 74.99}
];

// matches get requests to 3 routes

app.get('/', (req, res) => {
    res.send('The URL for products is http://localhost:4201/api/products');
});

function getProducts(): Product[] {
    return products;
}

//  to send JavaScript objects to the browser in JSON format, use the Express function json() on the response object.
app.get('/api/products', (req, res) => {
    res.json(getProducts());
});

function getProductById(productId: number): Product {
    return products.find(p => p.id === productId);
}

// The GET request came with a parameter. Its values are stored in the params property of the request object.
app.get('/api/products/:id', (req, res) => {
    res.json(getProductById(parseInt(req.params.id)));
});

const server = app.listen(4201, "localhost", () => {
    const {address, port} = server.address() as AddressInfo;
    console.log(`Listening on ${address}:${port}`);
});
