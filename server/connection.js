const mongoose = require("mongoose");

const adminUsername = encodeURIComponent("adisharma4857");
const adminPassword = encodeURIComponent("Winnt12#4");

const MONGO_URI = `mongodb+srv://${adminUsername}:${adminPassword}@cluster0.oqhek7l.mongodb.net/blogs?retryWrites=true&w=majority`;

const connectDb = async () => {
    const connection = await mongoose.connect(MONGO_URI);
    if(connection)console.log("Database connected");
    else console.log("database connection failed");
}

module.exports = {connectDb};