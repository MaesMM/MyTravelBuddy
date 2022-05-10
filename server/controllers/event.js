const { Event } = require("../models");
const axios = require("axios");

const test = async (req, res) => {
  console.log("yee");
  return res.status(200).send("It worksss");
};

const apicall = async () => {
  //const url = `https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=evenements-publics-openagenda0&q=mus%C3%A9e&rows=10&sort=date_end&facet=tags&facet=placename&facet=department&facet=region&facet=city&facet=date_start&facet=date_end&facet=pricing_info&facet=updated_at&facet=city_district&exclude.date_end=2021`;
  try {
    const url = `https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=evenements-publics-openagenda0&q=mus%C3%A9e&rows=450&sort=date_end&exclude.date_end=2021`;
    let reponse = await axios.get(url).then((res) => {
      return res.data;
    });

    return reponse;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const ApiRegister = async (req, res) => {
  try {
    let json = await apicall();
    var i = 0;
    nhits = 450;
   let cat = "museum";

    for (let i = 0; i < nhits; i++) {
      let eventData = {
        //location_id: i,
        name: json.records[i].fields.title,
        //category: json.records[i].fields.pricing_info,
        image: json.records[i].fields.image,
        description: json.records[i].fields.free_text,
        start_datetime: json.records[i].fields.date_start,
        end_datetime: json.records[i].fields.date_end,
        category : String("Musuem"),
        permanent: 0,
        adresse: json.records[i].fields.placename,
        latitude : json.records[i].geometry.coordinates[0],
        longitude : json.records[i].geometry.coordinates[1]
      };
    

      
      const event = await Event.create({
        ...eventData
      });
    }
    //event.addLocation()
   let events = await Event.findAll();


    console.log(events);
    return res.status(200).json(events);
  }catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};





const register = async (req, res) => {
  const {
    location_id,
    name,
    category,
    image,
    description,
    rate,
    start_datetime,
    end_datetime,
    permanent,
  } = req.body;
  try {
    const event = await Event.create({
      location_id,
      name,
      category,
      image,
      description,
      rate,
      start_datetime,
      end_datetime,
      permanent,
    });

    return res.json(event);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};


const getById = async (req, res) => {
  const id = req.params.id;
  try {
    const event = await Event.findOne({
      where: { id },
    });

    return res.json(event);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "something went wrong" });
  }
};

const deleteById = async (req, res) => {
  const id = req.params.id;
  try {
    const event = await Event.findOne({ where: { id } });
    await event.destroy();

    return res.json({ message: "Event deleted" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "something went wrong" });
  }
};

const modifyById = async (req, res) => {
  const id = req.params.id;
  const { name, category, image, description } = req.body;
  try {
    const event = await Event.findOne({ where: { id } });
    event.name = name;
    event.category = category;
    event.image = image;
    event.description = description;

    await event.save();

    return res.json(event);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "something went wrong" });
  }
};
module.exports = {
  test,
  ApiRegister,
  register,
  getById,
  deleteById,
  modifyById,
};
