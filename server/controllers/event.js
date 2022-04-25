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


const getById = async (req,res) => {
  const id = req.params.id
  try {
    const event = await Event.findOne({
      where: { id },
    })

    return res.json(event)
  } catch (err) {
    console.log(err)
    return res.status(500).json({error: 'something went wrong'})
  }
}

const deleteById = async (req,res) => {
  const id = req.params.id
  try {
    const event = await Event.findOne({ where: { id }})
    await event.destroy()

    return res.json({message: 'Event deleted'})
    } catch (err) {
    console.log(err)
    return res.status(500).json({error: 'something went wrong'})
  }
}

const modifyById = async (req,res) => {
  const id = req.params.id
  const {name, category, image, description } = req.body
  try {
    const event = await Event.findOne({ where: { id }})
    event.name = name
    event.category = category
    event.image = image
    event.description = description

    await event.save()

    return res.json(event)
    } catch (err) {
    console.log(err)
    return res.status(500).json({error: 'something went wrong'})
  }
}
module.exports = { test, register, getById, deleteById, modifyById };
