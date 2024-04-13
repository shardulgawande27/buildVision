import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('m_developer', (table) => {
        table.increments('m_developer_id').primary().notNullable();
        table.string('m_developer_name').notNullable();
        table.string('m_developer_address').notNullable();
        table.string('m_developer_username').unique().notNullable();
        table.string('m_developer_email').unique().notNullable();
        table.string('m_developer_password').notNullable();
        table.enum('m_is_developer_verified',['Y', 'N']).notNullable().defaultTo('N');
        table.enum('m_is_developer_active',['Y', 'N']).notNullable().defaultTo('N');
        table.enum('m_is_developer_delete', ['Y', 'N']).notNullable().defaultTo('N');
        table.timestamp('m_developer_created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('m_developer_updated_at').notNullable().defaultTo(knex.fn.now());
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('m_developer');
}

