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

const getById = async (req,res) => {
  const id = req.params.id
  try {
    const owner = await Owner.findOne({
      where: { id },
    })

    return res.json(owner)
  } catch (err) {
    console.log(err)
    return res.status(500).json({error: 'something went wrong'})
  }
}

const deleteById = async (req,res) => {
  const id = req.params.id
  try {
    const owner = await Owner.findOne({ where: { id }})
    await owner.destroy()

    return res.json({message: 'Owner deleted'})
    } catch (err) {
    console.log(err)
    return res.status(500).json({error: 'something went wrong'})
  }
}

const modifyById = async (req,res) => {
  const id = req.params.id
  const {name, firstname, email, phone, siret, document} = req.body
  try {
    const owner = await Owner.findOne({ where: { id }})
    owner.name = name
    owner.firstname = firstname
    owner.email = email
    owner.phone = phone
    owner.siret = siret
    owner.document = document


    await owner.save()

    return res.json(owner)
    } catch (err) {
    console.log(err)
    return res.status(500).json({error: 'something went wrong'})
  }
}
module.exports = { test, register, getById, deleteById, modifyById };