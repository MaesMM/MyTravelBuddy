const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { sequelize } = require("./models");
const { validateToken } = require("./controllers/JWT");

// s3 Packages
const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const { uploadFile, getFileStream } = require("./controllers/s3")

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
app.post("/api/events/create", async (req, res) => Event.register(req, res));

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
const { ApiGatewayManagementApi } = require("aws-sdk");
app.post("/api/structure/create/owner", async (req, res) =>
  Structure.register_owner(req, res)
);
app.post("/api/structure/create/location", async (req, res) =>
  Structure.register_location(req, res)
);
app.get("/api/structure/getInfo", async (req, res) =>
  Structure.getInfo(req, res)
);



// s3 handler
app.get('/images/:key', (req, res) => {
  console.log(req.params)
  const key = req.params.key
  const readStream = getFileStream(key)

  readStream.pipe(res)
})

app.post('/images', upload.single('image'), async (req, res) => {
  const file = req.file
  console.log(file)

  // apply filter
  // resize 

  const result = await uploadFile(file)
  await unlinkFile(file.path)
  console.log(result)
  const description = req.body.description
  res.send({imagePath: `/images/${result.Key}`})
})
// s3 end


// Start Server

app.listen({ port: PORT }, async () => {
  console.log("Connecting...");
  await sequelize.sync({ alter: true });
  console.log("Running on port 8080 !");
});
