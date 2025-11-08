import express from "express"
import cors from "cors"

const PORT = process.env.PORT || 7012;

const app = express();

app.use(express.json());

//middlewares

//routes

app.listen(PORT, () => {
  console.log(`Port ${PORT} ready for use`);
});