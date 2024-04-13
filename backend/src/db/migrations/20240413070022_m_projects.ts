import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('m_projects', (table) => {
        table.increments('m_project_id').primary().notNullable();
        table.string('m_project_name').notNullable();
        table.string('m_project_desc').notNullable();
        table.text('m_project_info'); 
        table.integer('m_city_id').unsigned().notNullable();
        table.enum('m_is_project_active', ['Y', 'N']).notNullable().defaultTo('N');
        table.enum('m_is_project_done', ['Y', 'N']).notNullable().defaultTo('N');
        table.enum('m_is_project_delete', ['Y', 'N']).notNullable().defaultTo('N');
        table.timestamp('m_project_created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('m_project_updated_at').notNullable().defaultTo(knex.fn.now());
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('m_projects');
}
