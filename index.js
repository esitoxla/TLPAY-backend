import express from "express"
import cors from "cors"
import { errorHandler } from "./middlewares/errorHandling.js";
import { notFound } from "./middlewares/notFound.js";
import transferRoute from "./routes/transfer.route.js"
import smsRouter from "./routes/sms.route.js"

const PORT = process.env.PORT || 7012;

const app = express();

app.use(express.json());

//routes
app.use("/api/transfer", transferRoute);
app.use("/api/sms", smsRouter);

//middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Port ${PORT} ready for use`);
});