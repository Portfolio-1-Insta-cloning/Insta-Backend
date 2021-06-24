// knex migrate:make create_users => to create migration file.
// knex migrate:latest => to update database
// knex seed:make filename => to create the seed files.
// knex seed:run => to seed the data.
exports.up = async function(knex) {

    await knex.schema.createTable("roles", (table) => {
        table.increments("id");
        table.text("role").notNull().unique();
    })

    await knex.schema.createTable("instausers", (table) => {
        table.increments("id");
        table.text("firstname").notNull();
        table.text("lastname").notNull();
        table.text("username").notNull().unique();
        table.text("password").notNull();
        table.integer("role_id").notNull().defaultTo(1).references("id").inTable("roles").onDelete("RESTRICT")
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("instausers");
    await knex.schema.dropTableIfExists("roles");
};
