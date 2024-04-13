import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {

    return knex.schema.createTable('m_society', (table) => {
        table.increments('m_society_id').primary().notNullable();
        table.string('m_society_name').notNullable();
        table.string('m_society_address').notNullable();
        table.string('m_city_id').notNullable().references('m_city_id');
        table.string('m_society_lat').notNullable();
        table.string( 'm_society_lang').notNullable();
        table.enum('m_is_socity_active',['Y', 'N']).notNullable().defaultTo('N');
        table.enum('m_is_socity_delete', [ 'Y','N' ] ).notNullable().defaultTo('N'); 
        table.timestamp('m_socity_created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('m_socity_updated_at').notNullable().defaultTo(knex.fn.now());

    })

}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("m_society");
}

