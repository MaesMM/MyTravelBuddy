const { Owner } = require("../models");

const test = async (req, res) => {
  console.log("yee");
  return res.status(200).send("It worksss");
};

const register = async (req,res) => {
  const {name, firstname, email, phone, siret, document} = req.body

  try{
    const owner = await Owner.create({ name, firstname, email, phone, siret, document })
  
    return res.json(owner)
  }catch(err){
    console.log(err)
    return res.status(500).json(err)
  }
}

// Used in './structure.js'
const owner_register = async (name, firstname, email, phone, siret, document) => {
  // -> check if owner exists already
  try{
    const owner = await Owner.create({ name, firstname, email, phone, siret, document });
    return owner
  }catch(err){
    console.log(err)
    return false
  }
};


module.exports = { test, register, owner_register };