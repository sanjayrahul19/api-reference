const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const connectDB = require("./config/db");
const studentRouter = require("./router/student");
const mentorRouter = require("./router/mentor");

connectDB();

app.use(express.json());
app.use("/student", studentRouter);
app.use("/mentor", mentorRouter);

app.listen(PORT, () => {
  console.log("Server is up and running");
});
