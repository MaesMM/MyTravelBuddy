const express = require("express");
const { sequelize } = require("./models");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { validateToken } = require("./controllers/JWT");
require("dotenv").config();
const app = express();

var corsOptions = {
  credentials: true,
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT;

// User
const User = require("./controllers/user");
app.post("/users", async (req, res) => User.register(req, res));

//location
const Location = require("./controllers/location");
app.post("/locations", async (req, res) => Location.register(req, res));

//rating
const Rating = require("./controllers/rating");
app.post("/ratings", async (req, res) => Rating.register(req, res));

//event
const Event = require("./controllers/event");
app.post("/events", async (req, res) => Event.register(req, res));

// administrator
const Administrator = require("./controllers/administrator");
app.post("/administrators", async (req, res) =>
  Administrator.register(req, res)
);

// owner
const Owner = require("./controllers/owner");
app.post("/owners", async (req, res) => Owner.register(req, res));

// price
const Price = require("./controllers/price");
app.post("/prices", async (req, res) => Price.register(req, res));

app.get("/test", async (req, res) => res.send("test"));
app.get("/api/test", async (req, res) => await User.test(req, res));

// Authentication
const Auth = require("./controllers/authenticator");
app.post("/api/register", async (req, res) => Auth.register(req, res));
app.post("/api/login", async (req, res) => Auth.login(req, res));
app.get("/api/profile", validateToken, async (req, res) =>
  Auth.profile(req, res)
);

const Structure = require("./controllers/structure");
app.post("/api/structure/create/owner", async (req, res) =>
  Structure.register_owner(req, res)
);
app.post("/api/structure/create/location", async (req, res) =>
  Structure.register_location(req, res)
);
app.get("/api/structure/getInfo", async (req, res) =>
  Structure.getInfo(req, res)
);

// Start Server

app.listen({ port: PORT }, async () => {
  console.log("Connecting...");
  await sequelize.sync({ alter: true });
  console.log("Running on port 8080 !");
});
