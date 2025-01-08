const express = require("express");
const app = express();
const connectDB = require("./dbConfig");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



connectDB();
const userRoutes = require("./routes/userRoutes");

app.use("/api/users", userRoutes);


const server=app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    });

process.on("unhandledRejection", (error) => {
    console.error("Unhandled Rejection:", error);
    server.close(() => {
        process.exit(1);
    });
});



