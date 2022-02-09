const OwnerModule = require("./owner");
const LocationModule = require("./location");

// 1. Création du Owner
// 2. Récupération et vérification du Siret (si association française, sinon à définir)
// 3. Remplissage des informations ( le lieu et les réseaux )
// 4. Vérification de la légitimité de l'Owner

const register_owner = async (req, res) => {
    const body = req.body

    try {
        // Owner verification
        // -> doit fournir la preuve que l'association lui appartient
        // Plusieurs profiles owner pour les différentes associations
        const isOwner = await OwnerModule.owner_register(body.name, body.firstname, body.email, body.phone, body.siret, body.document);
        console.log("IsOwner_id:", isOwner);

        res.status(200).send(isOwner);
    } catch {
        const ownerClone = isOwner;
        isOwner && isOwner.destroy();
        res.status(500).send("Couldn't register structure!", "\n| IsOwner :", ownerClone );
    }
};

const register_location = async (req, res) => {
    const body = req.body

    try {
        // Location creation
        // TODO - Redo the object creation functoin in 'location' controller
        const isLocation = await LocationModule.location_register(body.structure_name, body.structure_category, body.address, body.postal_code, body.city, body.state, body.country, body.image, body.description, body.rate, body.website, body.social_media, body.owner_id)
        console.log("IsLocation:", isLocation);

        res.status(200).send("Location Registered. Structure application complete!");
    } catch {
        const locationClone = isLocation;
        isLocation && isLocation.destroy();
        res.status(500).send("Couldn't register structure!", "\n| IsLocation", locationClone );
    }
}

const getInfo = async (req, res) => {
    const body = req.body

    res.status(200).send("Structure Info.");
};

module.exports = { register_owner, register_location, getInfo };