import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable("m_project_tasks", (table) => {
        table.string('m_task_desc');
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.alterTable('m_project_tasks', function(table) {
        table.dropColumn('new_column_name');
    });

}

