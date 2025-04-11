const { MongoClient, Collection } = require('mongodb');

async function main() {
    // Replace <connection-string> with your MongDB URI
    const uri = "mongodb://localhost:27017/"
    const client = new MongoClient(uri);
    const start = Date.now(); //Start the timer

    try {
        await client.connect();
        const duration = Date.now() - start; // Calculate duration
        console.log(`Connected to MongoDB in ${duration} ms`);

        const db = client.db("testDB");
        const collection = db.collection("users");


        // Insert a document
        await collection.insertOne({ name: "Ain Hidayah", age: 23 });
        console.log("Document inserted");

        // Query the document
        const result = await collection.findOne({ name: "Ain Hidayah"});
        console.log("Query result:", result);
    } catch (err) {
        console.error("Error:", err);
    } finally {
        await client.close();
    }
}

main();