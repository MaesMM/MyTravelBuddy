const { Location } = require("../models");

const test = async (req, res) => {
  console.log("yee");
  return res.status(200).send("It worksss");
};

const register = async (req,res) => {
  const { owner_id, name, category, address, postal_code, city, state, country, latitude, longitude, image, description, rate, website, social_media} = req.body

  try{
    const location = await Location.create({owner_id, name, category, address, postal_code, city, state, country, latitude, longitude, image, description, rate, website, social_media })
  
    return res.json(location)
  }catch(err){
    console.log(err)
    return res.status(500).json(err)
  }
}


module.exports = { test, register };
