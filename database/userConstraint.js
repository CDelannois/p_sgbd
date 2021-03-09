module.exports = (db) => {

    const collectionName = "users"

    db.createCollection(collectionName, {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["firstName", "lastName", "birthday", "active"],
                properties: {
                    firstName: {
                        bsonType: "string",
                        description: "Ce champ doit être une chaîne de caractères et est requis."
                    },

                    lastName: {
                        bsonType: "string",
                        description: "Ce champ doit être une chaîne de caractères et est requis."
                    },

                    birthday: {
                        bsonType: "date",
                        description: "Ce champ doit être une date et est requis."
                    },

                    active: {
                        bsonType: "boolean",
                        description: "Ce champ doit être une chaîne de caractères et est requis."
                    }
                }
            }
        }
    })
}