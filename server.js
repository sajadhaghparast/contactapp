const path = require("path");

const express = require("express");

const adminRoutes = require("./routes/admin");
const indexRoutes = require("./routes/index");

const app = express();

//Middlewares
app.use(express.json());
//End of middleware

//Routes
app.use(indexRoutes);
app.use("/admin", adminRoutes);

//End of routes

app.listen(3000, () => console.log(`Server is running.`));
