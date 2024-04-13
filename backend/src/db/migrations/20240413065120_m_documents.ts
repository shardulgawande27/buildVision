import { table } from "console";
import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('m_documents', (table) => {
        table.increments('m_document_id').primary().notNullable();
        table.string('m_document_name').notNullable();
        table.string('m_document_desc').notNullable();
        table.string('m_document_type').notNullable();
        table.string('m_document_size').notNullable();
        table.integer('m_user_id').notNullable();
        table.integer('m_user_role_id').notNullable();
        table.enum('m_is_society_active', ['Y', 'N']).notNullable().defaultTo('N');
        table.enum('m_is_society_delete', ['Y', 'N']).notNullable().defaultTo('N');
        table.timestamp('m_society_created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('m_society_updated_at').notNullable().defaultTo(knex.fn.now());
        
    }
    )
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('m_documents');

}

