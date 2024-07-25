const dbConnect = require('./mongodb1');
const readline = require('readline');

const main = async () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter command (show, insert, update, delete): ', async (command) => {
        switch (command.toLowerCase()) {
            case 'show':
                await showData();
                break;
            case 'insert':
                await insertData();
                break;
            case 'update':
                await updateData();
                break;
            case 'delete':
                await deleteData();
                break;
            default:
                console.log('Invalid command.');
        }
        rl.close();
    });
};

const showData = async () => {
    try {
        const collection = await dbConnect();
        const data = await collection.find().toArray();
        console.log("Data:", data);
    } catch (err) {
        console.error("An error occurred while fetching data:", err.message);
    }
};

const insertData = async () => {
    try {
        const collection = await dbConnect();
        const result = await collection.insertMany(
            [
                { name: 'note5', brand: 'vivo', price: 320, category: 'mobile' },
                { name: 'note4', brand: 'mi', price: 420, category: 'mobile' },
                { name: 'note3', brand: 'samsung', price: 120, category: 'mobile' }
            ]
        );
        console.log("Documents inserted:", result.insertedCount);
    } catch (err) {
        console.error("An error occurred while inserting data:", err.message);
    }
};

const updateData = async () => {
    try {
        const collection = await dbConnect();
        const result = await collection.updateOne(
            { name: 'c13' },
            { $set: { name: 'c12' } }
        );
        console.log("Matched Count:", result.matchedCount);
        console.log("Modified Count:", result.modifiedCount);
    } catch (err) {
        console.error("An error occurred while updating data:", err.message);
    }
};

const deleteData = async () => {
    try {
        const collection = await dbConnect();
        const result = await collection.deleteOne({ name: 'c12' });

        if (result.deletedCount === 1) {
            console.log("Successfully deleted one document.");
        } else {
            console.log("No document found with the specified filter.");
        }

    } catch (err) {
        console.error("An error occurred while deleting data:", err.message);
    }
};

main();
