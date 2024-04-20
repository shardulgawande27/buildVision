import { table } from "console";
import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable('m_projects', (table) => {
        table.string('m_project_image_url_1')
        table.string('m_project_image_url_2')
        table.string('m_project_image_url_3')
        table.string('m_project_timeline_in_days')
        table.string('m_completed_in_percentage')
        table.string('m_project_status')

    })
}


export async function down(knex: Knex): Promise<void> {
     await knex.schema.dropTable('m_projects');
}

