import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("t_transaction", (table) => {
    table.increments("transaction_id").primary().notNullable();
    table.integer("t_user_id").unsigned().notNullable();
    table.foreign("t_user_id").references("u_user_id").inTable("u_user");
    table.integer("t_plan_id").notNullable();
    table.string("t_net_price").notNullable();
    table.enum("t_is_ack_success", ["Y", "N"]).notNullable().defaultTo("N");
    table
      .enum("t_is_transaction_verified", ["Y", "N"])
      .notNullable()
      .defaultTo("N");
    table
      .timestamp("t_transction_created_at")
      .notNullable()
      .defaultTo(knex.fn.now());
    table
      .timestamp("t_transction_updated_at")
      .notNullable()
      .defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("t_transaction");
}
