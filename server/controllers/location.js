const { Location } = require("../models");

const test = async (req, res) => {
  console.log("yee");
  return res.status(200).send("It worksss");
};

const register = async (req,res) => {
  const { name, category, address, postal_code, city, state, country, latitude, longitude, image, description, rate, website, social_media} = req.body

  try{
    const location = await Location.create({ name, category, address, postal_code, city, state, country, latitude, longitude, image, description, rate, website, social_media })
  
    return res.json(location)
  }catch(err){
    console.log(err)
    return res.status(500).json(err)
  }
}

const location_register = async (name, category, address, postal_code, city, state, country, image, description, website, social_media, owner_id) => {
  // API to find: latitude, longitude
  // 'rate' field shouldn't be in the post request
  
  try{
    const location = await Location.create({ name: name, category: category, address: address, postal_code: postal_code, city: city, state: state, country: country, image: image, description: description, website: website, social_media: social_media, owner_id: owner_id})
    return location
  }catch(err){
    console.log(err)
    return false
  }
};

module.exports = { test, register, location_register };
