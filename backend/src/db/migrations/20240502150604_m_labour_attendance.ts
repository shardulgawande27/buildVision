import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("m_labour_attendance", (table) => {
    table.increments("attendance_id").primary().notNullable();
    table
      .integer("labour_id")
      .unsigned()
      .notNullable()
      .references("l_id")
      .inTable("m_labour");
    table.date("attendance_date").notNullable();
    table
      .enum("attendance_status", ["present", "absent", "half_day"])
      .notNullable();
    table.float("amount_paid").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("m_labour_attendance");
}
