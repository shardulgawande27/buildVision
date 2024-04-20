import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('m_pmc', (table) => {
        table.increments('m_pmc_id').primary().notNullable();
        table.string('m_city_name').notNullable();
        table.string('m_city_lat').notNullable();
        table.string('m_city_lang').notNullable();
        table.enum('m_is_city_active',['Y', 'N']).notNullable().defaultTo('N');
        table.enum('m_is_pmc_delete',['Y', 'N']).notNullable().defaultTo('N');
        table.timestamp('m_pmc_created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('m_pmc_updated_at').notNullable().defaultTo(knex.fn.now());
        table.string('m_pmc_name').notNullable();
        table.text('m_pmc_address').notNullable();
        table.string('m_pmc_email').notNullable();
        table.string('m_pmc_username').notNullable();
        table.enum('m_is_pmc_active',['Y', 'N']).notNullable().defaultTo('N');
    });
}


export async function down(knex: Knex): Promise<void> {
    //Rollback: drop the table
    await knex.schema.dropTable('m_pmc');
}
