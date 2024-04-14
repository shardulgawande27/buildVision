import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable('m_society', (table) => {
        table.string('m_society_email').notNullable();
        table.string('m_society_password').notNullable();
        table.string('m_society_username').notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("m_society");
}

