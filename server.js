import express from "express";
import bodyParser from "body-parser";
import sequelize from "./config/database.js";
import User from "./model/User.js";
import Job from "./model/Job.js";
import { userRouter } from "./route/UserRoute.js";
import { jobRouter } from "./route/JobRoute.js";

const app = express();

sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((err) => {
    console.log("Unable to synchronize the database:" + err.message);
  });

app.use(bodyParser.json());

// Routes
app.use("/api/users", userRouter);
app.use("/api/jobs", jobRouter);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
