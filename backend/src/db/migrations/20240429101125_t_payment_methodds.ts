import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("t_payment_methods", function (table) {
    table.increments("t_payment_method_id").primary();
    table.string("t_pmc_id").notNullable();
    table.string("t_city_id").notNullable();
    table.string("t_rez_key").notNullable();
    table.string("t_rez_secret").notNullable();
    table.enum("t_is_active", ["Y", "N"]).notNullable().defaultTo("Y");
    table.dateTime("t_transaction_created_at").notNullable();
    table.dateTime("t_transaction_updated_at").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("t_payment_methods");
}
