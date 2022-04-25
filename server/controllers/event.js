
const { Event } = require("../models");

const test = async (req, res) => {
  console.log("yee");
  return res.status(200).send("It worksss");
};

        
const apicall = async (req, res) => {
  const url = `https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=evenements-publics-openagenda0&q=mus%C3%A9e&rows=550&sort=date_end&facet=tags&facet=placename&facet=department&facet=region&facet=city&facet=date_start&facet=date_end&facet=pricing_info&facet=updated_at&facet=city_district&exclude.date_end=2021`;

 try{
    fetch(url, {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json'
      }
    })
    res.status(200).send("It worksss")
    .then(res => res.json())
    .then(response => console.log(res.json, response))
    
    
  }
  catch(err){
    console.log(err)
    return res.status(500).json(err)
  }

};


// let data = fetch(url)
//   .then(async (res)=>{
//       let data = await res.json();
//       console.log(res.json());

//       return res.json;
//   })

// .then(function (data){
//       appendData(data);
//   })

// .catch(function (err) {
//   });


const register = async (req,res) => {
  const {location_id, name, category, image, description, rate, start_datetime, end_datetime, permanent} = req.body

  try{
    const event = await Event.create({location_id, name, category, image, description, rate, start_datetime, end_datetime, permanent})
  
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
module.exports = { test, register, getById, deleteById, modifyById, apicall };
