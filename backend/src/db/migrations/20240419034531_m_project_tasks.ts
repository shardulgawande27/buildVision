import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('m_project_tasks', (table) => {
        table.increments('m_task_id').primary().notNullable();
        table.string('m_task_title')
        table.text('m_project_desc')
        table.text('m_project_info'); 
        table.string('m_city_id')
        table.string('m_project_id')
        table.string('m_user_id')
        table.string('m_task_status')
        table.string('m_task_assign_to')
        table.dateTime('m_task_start_date')
        table.dateTime('m_task_end_date')
        table.text('m_task_images')
        table.enum('m_is_task_active', ['Y', 'N']).notNullable().defaultTo('N');
        table.enum('m_is_task_done', ['Y', 'N']).notNullable().defaultTo('N');
        table.timestamp('m_task_created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('m_task_updated_at').notNullable().defaultTo(knex.fn.now());
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('m_project_tasks');
}
