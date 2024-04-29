import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {

    return knex.schema.alterTable("m_project_tasks", (table) => {
        table.string('task_percent');
    })

}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.alterTable("m_project_tasks", (table) => {
        table.dropColumn('task_percent');
    })
}

