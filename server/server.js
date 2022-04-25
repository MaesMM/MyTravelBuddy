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

app.get("/users/:id", async (req, res) => {
  User.getById(req, res);
});

app.delete("/users/:id", async (req, res) => {
  User.deleteById(req, res);
});

app.put("/users/:id", async (req, res) => {
  User.modifyById(req, res);
});

//location
const Location = require("./controllers/location");
app.post("/locations", async (req, res) => Location.register(req, res));

app.get("/locations/:id", async (req, res) => {
  Location.getById(req, res);
});

app.delete("/locations/:id", async (req, res) => {
  Location.deleteById(req, res);
});

app.put("/locations/:id", async (req, res) => {
  Location.modifyById(req, res);
});

//rating
const Rating = require("./controllers/rating");
app.post("/ratings", async (req, res) => Rating.register(req, res));

app.get("/ratings/:id", async (req, res) => {
  Rating.getById(req, res);
});

app.get("/allratings/:location_id", async (req, res) => {
  Rating.getAllById(req, res);
});

app.delete("/ratings/:id", async (req, res) => {
  Rating.deleteById(req, res);
});

app.get("/moyennes/:location_id", async (req, res) => {
  Rating.moyenne(req, res);
});

//event
const Event = require("./controllers/event");
app.post("/events", async (req, res) => Event.register(req, res));

app.get("/events/:id", async (req, res) => {
  Event.getById(req, res);
});

app.delete("/events/:id", async (req, res) => {
  Event.deleteById(req, res);
});

app.put("/events/:id", async (req, res) => {
  Event.modifyById(req, res);
});

// administrator
const Administrator = require("./controllers/administrator");
app.post("/administrators", async (req, res) =>
  Administrator.register(req, res)
);

app.get("/administrators/:id", async (req, res) => {
  Administrator.getById(req, res);
});

app.delete("/administrators/:id", async (req, res) => {
  Administrator.deleteById(req, res);
});

app.put("/administrators/:id", async (req, res) => {
  Administrator.modifyById(req, res);
});

// owner
const Owner = require("./controllers/owner");
app.post("/owners", async (req, res) => Owner.register(req, res));

app.get("/owners/:id", async (req, res) => {
  Owner.getById(req, res);
});

app.delete("/owners/:id", async (req, res) => {
  Owner.deleteById(req, res);
});

app.put("/owners/:id", async (req, res) => {
  Owner.modifyById(req, res);
});

// price
const Price = require("./controllers/price");
app.post("/prices", async (req, res) => Price.register(req, res));

app.get("/test", async (req, res) => res.send("test"));
app.get("/api/test", async (req, res) => await User.test(req, res));

app.get("/prices/:id", async (req, res) => {
  Price.getById(req, res);
});

app.delete("/prices/:id", async (req, res) => {
  Price.deleteById(req, res);
});

app.put("/prices/:id", async (req, res) => {
  Price.modifyById(req, res);
});
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
