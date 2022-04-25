const { Administrator } = require("../models");

const test = async (req, res) => {
  console.log("yee");
  return res.status(200).send("It worksss");
};

const register = async (req,res) => {
  const {name, firstname, email, password, image} = req.body

  try{
    const administrator = await Administrator.create({ name, firstname, email, password, image})
  
    return res.json(administrator)
  }catch(err){
    console.log(err)
    return res.status(500).json(err)
  }
}

const getById = async (req,res) => {
  const id = req.params.id
  try {
    const administrator = await Administrator.findOne({
      where: { id },
    })

    return res.json(administrator)
  } catch (err) {
    console.log(err)
    return res.status(500).json({error: 'something went wrong'})
  }
}

const deleteById = async (req,res) => {
  const id = req.params.id
  try {
    const administrator = await Administrator.findOne({ where: { id }})
    await administrator.destroy()

    return res.json({message: 'Administrator deleted'})
    } catch (err) {
    console.log(err)
    return res.status(500).json({error: 'something went wrong'})
  }
}

const modifyById = async (req,res) => {
  const id = req.params.id
  const {name, firstname, image, password } = req.body
  try {
    const administrator = await Administrator.findOne({ where: { id }})
    administrator.name = name
    administrator.firstname = firstname
    administrator.image = image
    administrator.password = password

    await administrator.save()

    return res.json(administrator)
    } catch (err) {
    console.log(err)
    return res.status(500).json({error: 'something went wrong'})
  }
}


module.exports = { test, register, getById, deleteById, modifyById };