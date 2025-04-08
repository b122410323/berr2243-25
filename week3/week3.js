const express = require('express');
const { MongoClient, Collection } = require('mongodb');
const port = 3000

const app = express();
app.use(express.json());

let db;


async function connectToMongoDB() {
    const uri = "mongodb://localhost:27017/"
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db("testDB");

    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.close();
    }
}
connectToMongoDB();

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

main();