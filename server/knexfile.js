const path = require( "path" );
const dbPath = path.join( __dirname, "./database/myhousedb.sqlite3" );

module.exports = {
    development: {
        client:           "sqlite3",
        connection:       { filename: dbPath },
        useNullAsDefault: true,
        migrations:       {
            directory: "./database/migrations",
            tableName: "dbmigrations",
        },
        seeds:            { directory: "./database/seeds" },
        // by default SQLite will not enforce foreign keys
        pool:             {
            afterCreate: ( conn, done ) => {
                conn.run( "PRAGMA foreign_keys = ON", done ); // enforce FK
            },
        },
    },
};
