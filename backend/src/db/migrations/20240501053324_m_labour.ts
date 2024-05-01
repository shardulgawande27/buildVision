import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("m_labour", (table) => {
    table.increments("l_id").primary().notNullable();
    table.string("l_name").notNullable();
    table.integer("l_wage").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("m_labour");
}
