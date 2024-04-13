import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('m_city', (table) => {
        table.increments('m_city_id').primary().notNullable();
        table.string('m_city_name').notNullable();
        table.string('m_city_lat').notNullable();
        table.string('m_city_lang').notNullable();
        table.enum('m_is_city_active', ['Y', 'N']).notNullable().defaultTo('N');
        table.enum('m_is_city_delete', ['Y', 'N']).notNullable().defaultTo('N');
        table.timestamp('m_city_created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('m_city_updated_at').notNullable().defaultTo(knex.fn.now());
    });
}

export async function down(knex: Knex): Promise<void> {

    await knex.schema.dropTable('m_city');
}
