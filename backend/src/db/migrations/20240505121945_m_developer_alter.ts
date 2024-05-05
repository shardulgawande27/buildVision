import { table } from "console";
import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable("m_developer", (table) => {
    table.integer("m_project_id").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("m_developer", (table) => {
    table.dropColumn("m_project_id");
  });
}
