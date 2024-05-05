import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {

    return knex.schema.createTable('m_project_img_docs', (table) => {
        table.increments('id').primary().notNullable();
        table.string('type').notNullable();
        table.string('m_project_id').notNullable().references('m_project_id');
        table.string('m_url_1')
        table.string('m_url_2')
        table.string('m_url_3')
        table.enum('is_compress',['Y', 'N']).notNullable().defaultTo('N');
        table.enum('is_active',['Y', 'N']).notNullable().defaultTo('Y');
        table.enum('is_delete', [ 'Y','N' ] ).notNullable().defaultTo('N'); 
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());

    })

}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("m_project_img_docs");
}

