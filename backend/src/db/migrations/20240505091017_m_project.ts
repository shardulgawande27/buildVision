import { table } from "console";
import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable('m_projects', (table) => {
        table.string('m_cts_number').notNullable()
        table.string('m_total_members').notNullable()
        table.string('m_room_type').notNullable()
        table.string('m_no_of_rooms').notNullable()
        table.string('m_sq_meter').notNullable()
        table.string('m_chairman_name').notNullable()
        table.string('m_chairman_phone').notNullable()
        table.string('m_sec_name').notNullable()
        table.string('m_sec_phone').notNullable()
        table.string('m_treasurer_name').notNullable()
        table.string('m_treasurer_phone').notNullable()
        table.string('plot_area_pr_card').notNullable()
        table.string('plot_area_tilr').notNullable()
        table.string('plot_area_ps').notNullable()
        table.string('project_lat').notNullable()
        table.string('project_lang').notNullable()
        table.string('m_socity_name').notNullable()
        table.string('m_project_city').notNullable()
        table.string('m_project_state').notNullable()
        table.enum('m_fedration',['Y', 'N']).notNullable().defaultTo('Y');

    })
}


export async function down(knex: Knex): Promise<void> {
     await knex.schema.dropTable('m_projects');
}

