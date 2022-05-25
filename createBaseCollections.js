const db = require("./app/models");
const Role = db.role;
const Location = db.location;

const createRolesTable = async () => {

    Role.estimatedDocumentCount(async (err, count) => {
        if (!err && count === 0) {
            await Role.create([
                {
                    name: "user"
                },
                {
                    name: "moderator"
                },
                {
                    name: "admin"
                },
            ])
        }
    })
}


const createLocationsTable = async () => {

    Location.estimatedDocumentCount(async (err, count) => {
        if (!err && count === 0) {
            await Location.create([
                {
                  "city": "Chisinau",
                  "phoneNumber": "022 345 678"
                },
                {
                  "city": "Balti",
                  "phoneNumber": "022 345 345"
                },
                {
                  "city": "Cahul",
                  "phoneNumber": "022 345 345"
                },
                {
                  "city": "Comrat",
                  "phoneNumber": "022 345 345"
                },
                {
                  "city": "Ceadar-Lunga",
                  "phoneNumber": "022 345 345"
                }
              ])
        }
    })
}

module.exports = {
    createRolesTable,
    createLocationsTable
};


