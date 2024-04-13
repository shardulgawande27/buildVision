import { table } from "console";
import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('m_subscription_plans', (table) => {
        table.increments('m_plan_id').primary().notNullable();
        table.string('m_plan_name').notNullable();
        table.string('m_plan_amount').notNullable();
        table.enum('m_is_plan_active',['Y', 'N']).notNullable().defaultTo('N')
        table.enum('m_is_plan_delete', ['Y', 'N']).notNullable().defaultTo('N');
        table.timestamp('m_plan_created_at').defaultTo(knex.fn.now());
        table.timestamp('m_plan_updated_at').defaultTo(knex.fn.now());
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('m_subscription_plans');
}

