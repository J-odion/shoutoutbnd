const express = require("express");
const connectDB = require("./utils/database");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const auth = require("./middleware/auth");
const cors = require("cors");
const errorHandler = require("./middleware/error");
const router = require("./routes/shoutoutRoutes");


dotenv.config();
connectDB();

const app = express();

const ALLOWED_ORIGINS = [
  "http://localhost:3000",
  "http://shoutout.kairoshof.com",
  "https://shoutout.kairoshof.com",
  "http://shoutout-5m9fl0821-emmanuel-jafarus-projects-dc5c5a7f.vercel.app/",
  "https://shoutout-5m9fl0821-emmanuel-jafarus-projects-dc5c5a7f.vercel.app/",
  "*",
];

// Middleware
app.use(express.json());
app.use(bodyParser.json());

// CORS configuration
const corsOptions = {
  origin: ALLOWED_ORIGINS,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT;


app.use("/api/shoutouts", require("./routes/shoutoutRoutes"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
