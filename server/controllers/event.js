const { Event } = require("../models");

const test = async (req, res) => {
  console.log("yee");
  return res.status(200).send("It worksss");
};

const register = async (req,res) => {
  const {name, location_id, category, image, description, start_datetime, end_datetime, permanent} = req.body

  try{
    const event = await Event.create({name, location_id, category, image, description, start_datetime, end_datetime, permanent})
  
    return res.json(event)
  }catch(err){
    console.log(err)
    return res.status(500).json(err)
  }
}


module.exports = { test, register };
