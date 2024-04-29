import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable("m_project_tasks", (table) => {
        table.dropColumn("m_project_desc");
    })
}


export async function down(knex: Knex): Promise<void> {
     return knex.schema.alterTable("m_project_tasks", (table) => {
        table.string('m_project_desc');
     })

}

