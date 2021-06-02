require("dotenv").config();
module.exports = {

    // development: {
    //     client: "sqlite3",
    //     useNullAsDefault: true,
    //     connection: { filename: "./data/users.db3" },
    //     migrations: { directory: "./data/migrations" },
    //     seeds: { directory: "./data/seeds" },
    //     pool: { afterCreate: (conn, done) => { conn.run("PRAGMA foreign_keys = ON", done) } },
    // },

    development: {
        client: "pg",
        useNullAsDefault: true,
        connection: {
            host: "lallah.db.elephantsql.com",
            port: "5432",
            user: "tkagaawl",
            database: "tkagaawl",
            password: process.env.DB_PASSWORD
        },
        migrations: { directory: "./data/migrations" },
        seeds: { directory: "./data/seeds" },
        // pool: { afterCreate: (conn, done) => { conn.run("PRAGMA foreign_keys = ON", done) } },
    },

    testing: {
        client: "sqlite3",
        useNullAsDefault: true,
        connection: { filename: "./data/usersTesting.db3" },
        migrations: { directory: "./data/migrations" },
        seeds: { directory: "./data/seeds" },
        pool: {afterCreate: (conn, done) => {conn.run("PRAGMA foreign_keys = ON", done)}}
    },

    production: {
        client: "pg",
        connection: process.env.DATABASE_URL,
        migrations: { directory: "./data/migrations" },
        seeds: { directory: "./data/seeds" },
        pool: {min: 2, max: 10}
    }
}