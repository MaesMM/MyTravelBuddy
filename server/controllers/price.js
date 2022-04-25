const { Price } = require("../models");

const test = async (req, res) => {
  console.log("yee");
  return res.status(200).send("It worksss");
};

const register = async (req, res) => {
  const { type, value, event_id } = req.body;

  try {
    const price = await Price.create({ type, value, event_id });

    return res.json(price);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const getById = async (req, res) => {
  const id = req.params.id;
  try {
    const price = await Price.findOne({
      where: { id },
    });

    return res.json(price);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "something went wrong" });
  }
};

const deleteById = async (req, res) => {
  const id = req.params.id;
  try {
    const price = await Price.findOne({ where: { id } });
    await price.destroy();

    return res.json({ message: "price deleted" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "something went wrong" });
  }
};

const modifyById = async (req, res) => {
  const id = req.params.id;
  const { type, value } = req.body;
  try {
    const price = await Price.findOne({ where: { id } });
    price.type = type;
    price.value = value;

    await price.save();

    return res.json(price);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "something went wrong" });
  }
};
module.exports = { test, register, getById, deleteById, modifyById };
