const { Location } = require("../models");

const test = async (req, res) => {
  console.log("yee");
  return res.status(200).send("It worksss");
};

const register = async (req, res) => {
  const {
    owner_id,
    name,
    category,
    address,
    postal_code,
    city,
    state,
    country,
    latitude,
    longitude,
    image,
    description,
    rate,
    website,
    social_media,
  } = req.body;

  try {
    const location = await Location.create({
      owner_id,
      name,
      category,
      address,
      postal_code,
      city,
      state,
      country,
      latitude,
      longitude,
      image,
      description,
      rate,
      website,
      social_media,
    });

    return res.json(location);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const getById = async (req, res) => {
  const id = req.params.id;
  try {
    const location = await Location.findOne({
      where: { id },
    });

    return res.json(location);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "something went wrong" });
  }
};

const deleteById = async (req, res) => {
  const id = req.params.id;
  try {
    const location = await Location.findOne({ where: { id } });
    await location.destroy();

    return res.json({ message: "Location deleted" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "something went wrong" });
  }
};

const modifyById = async (req, res) => {
  const id = req.params.id;
  const {
    name,
    category,
    address,
    postal_code,
    city,
    state,
    country,
    image,
    description,
    website,
    social_media,
  } = req.body;
  try {
    const location = await Location.findOne({ where: { id } });
    location.name = name;
    location.category = category;
    location.address = address;
    location.postal_code = postal_code;
    location.city = city;
    location.state = state;
    location.country = country;
    location.image = image;
    location.description = description;
    location.website = website;
    location.social_media = social_media;

    await location.save();

    return res.json(location);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "something went wrong" });
  }
};

module.exports = { test, register, getById, deleteById, modifyById };
