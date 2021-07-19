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
        table.integer("role_id").notNull().references("id").inTable("roles").onDelete("CASCADE")
    })

    await knex.schema.createTable("courses", (table) => {
        table.increments("id");
        table.text("course_name").notNull();
    })

    await knex.schema.createTable("title_description", (table) => {
        table.increments("id");
        table.text("title").notNull();
        table.text("description").notNull();
    })

    await knex.schema.createTable("course_details", (table) => {
        table.integer("course_id").notNull().references("id").inTable("courses").onDelete("CASCADE");
        table.integer("title_description_id").notNull().references("id").inTable("title_description").onDelete("CASCADE");
        table.primary(["course_id", "title_description_id"])
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("course_details");
    await knex.schema.dropTableIfExists("title_description");
    await knex.schema.dropTableIfExists("courses");
    await knex.schema.dropTableIfExists("instausers");
    await knex.schema.dropTableIfExists("roles");
};
