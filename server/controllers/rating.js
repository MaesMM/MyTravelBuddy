const { Rating } = require("../models");

const test = async (req, res) => {
  console.log("yee");
  return res.status(200).send("It worksss");
};

const register = async (req, res) => {
  const { user_id, location_id, rate, comment } = req.body;

  try {
    if (testvalue(res, rate)) {
      const rating = await Rating.create({
        user_id,
        location_id,
        rate,
        comment,
      });
      return res.json(rating);
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const average = (arr) => {
  if (arr.length) {
    let avg =
      arr.reduce((a, b) => {
        return a + b.rate;
      }, 0) / arr.length;

    return avg;
  }

  return 0;
};

const moyenne = async (req, res) => {
  const location_id = req.params.location_id;
  try {
    const rating = await Rating.findAll({
      where: { location_id },
    });

    const avg = average(rating).toFixed(1);

    return res.json(avg);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "something went wrong" });
  }
};

const getById = async (req, res) => {
  const id = req.params.id;
  try {
    const rating = await Rating.findOne({
      where: { id },
    });

    return res.json(rating);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "something went wrong" });
  }
};

const getAllById = async (req, res) => {
  const location_id = req.params.location_id;
  try {
    const rating = await Rating.findAll({
      where: { location_id },
    });

    return res.json(rating);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "something went wrong" });
  }
};

const deleteById = async (req, res) => {
  const id = req.params.id;
  try {
    const rating = await Rating.findOne({ where: { id } });
    await rating.destroy();

    return res.json({ message: "Rate deleted" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "something went wrong" });
  }
};

const testvalue = (req, res, rate) => {
  if (rate > 5) {
    console.log(err);
    return res.status(500).json(err);
  } else return true;
};

module.exports = {
  test,
  register,
  testvalue,
  getById,
  getAllById,
  deleteById,
  moyenne,
};
