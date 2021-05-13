// knex migrate:make create_users => to create migration file.
// knex migrate:latest => to update database
// knex seed:make filename => to create the seed files.
// knex seed:run => to seed the data.
exports.up = async function(knex) {
    await knex.schema.createTable("instausers", (table) => {
        table.increments("id");
        table.text("username").notNull().unique();
        table.text("password").notNull()
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("instausers");
};
