const { User } = require("../models");

const test = async (req, res) => {
  console.log("yee");
  return res.status(200).send("It worksss");
};

const register = async (req,res) => {
  const {name, firstname, email, password, image, isAdmin} = req.body

  try{
    const user = await User.create({ name, firstname, email, password, image, isAdmin })
  
    return res.json(user)
  }catch(err){
    console.log(err)
    return res.status(500).json(err)
  }
}

const getById = async (req,res) => {
  const id = req.params.id
  try {
    const user = await User.findOne({
      where: { id },
    })

    return res.json(user)
  } catch (err) {
    console.log(err)
    return res.status(500).json({error: 'something went wrong'})
  }
}

const deleteById = async (req,res) => {
  const id = req.params.id
  try {
    const user = await User.findOne({ where: { id }})
    await user.destroy()

    return res.json({message: 'user deleted'})
    } catch (err) {
    console.log(err)
    return res.status(500).json({error: 'something went wrong'})
  }
}

const modifyById = async (req,res) => {
  const id = req.params.id
  const {name, firstname, email, password, image, isAdmin } = req.body
  try {
    const user = await User.findOne({ where: { id }})
    user.name = name
    user.firstname = firstname
    user.email = email
    user.password = password
    user.image = image
    user.isAdmin = isAdmin

    await user.save()

    return res.json(user)
    } catch (err) {
    console.log(err)
    return res.status(500).json({error: 'something went wrong'})
  }
}
module.exports = { test, register, getById, deleteById, modifyById };