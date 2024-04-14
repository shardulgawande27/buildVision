import { table } from "console";
import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable('m_pmc', (table) => {
        table.string('m_pmc_name').notNullable();
        table.text('m_pmc_address').notNullable();
        table.string('m_pmc_email').notNullable();
        table.string('m_pmc_username').notNullable();
        table.enum('m_is_pmc_active',['Y', 'N']).notNullable().defaultTo('N');

    

    })
}


export async function down(knex: Knex): Promise<void> {
     await knex.schema.dropTable('m_pmc');
}

