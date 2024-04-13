import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {

    return knex.schema.createTable('m_consultant', (table) => {
        table.increments('m_consultant_id').primary().notNullable();
        table.string('m_consultant_name', 100).notNullable();
        table.string('m_consultant_address').notNullable();
        table.string('m_consultant_username').notNullable().unique();
        table.string('m_consultant_password').notNullable();
        table.enum('m_is_consultant_verified', ['Y', 'N']).notNullable().defaultTo('N');
        table.enum('m_is_consultant_active', ['Y', 'N']).notNullable().defaultTo('N');
        table.enum('m_is_consultant_delete', ['Y', 'N']).notNullable().defaultTo('N');
        table.timestamp('m_consultant_created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('m_consultant_updated_at').notNullable().defaultTo(knex.fn.now());  

    })

}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("m_consultant");
}

