const mongoose = require("mongoose");

module.exports = async () => {
    const mongoUri =
    'mongodb+srv://avigahlowt:MaFiWTwMbecHQoFH@cluster0.5mwp1rn.mongodb.net/?retryWrites=true&w=majority';

    try {
        const connect = await mongoose.connect(mongoUri);

        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
