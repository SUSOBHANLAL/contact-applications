const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb();
const app = express();


const port  = process.env.PORT || 4001;

// this is works as a parsar
app.use(express.json());

app.use("/api/contacts",require("./routes/contactRoutes"));
app.use(errorHandler);


app.listen(port,() => {
    console.log(`server running on the port ${port}`);
})