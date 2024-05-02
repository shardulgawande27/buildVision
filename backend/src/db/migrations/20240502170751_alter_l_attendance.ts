import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("m_labour_attendance", (table) => {
    table.dropColumn("attendance_date");
    table
      .timestamp("attendance_timestamp")
      .notNullable()
      .defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("m_labour_attendance", (table) => {
    table.dropColumn("attendance_timestamp");
    table.date("attendance_date").notNullable();
  });
}
