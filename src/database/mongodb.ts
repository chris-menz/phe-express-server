import mongoose from "mongoose"

const mongoConnString = "mongodb+srv://phe-dev-db:phe-dev-db-pw@phe-dev-cluster.baefg.mongodb.net/?retryWrites=true&w=majority"

export async function connectToMongo(){
    try {
        var connection = await mongoose.connect(mongoConnString)
        console.log("Successfully connected to Dev DB")
        return connection;
    } catch (e) {
        console.log(e)
        console.log("failed to connect")
        process.exit(1);
    }
}

export async function disconnectFromMongo() {
    await mongoose.disconnect()

    console.log("Disconnecting from db...")
    return;
}