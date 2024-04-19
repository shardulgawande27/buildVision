import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('u_user', (table) => {
        table.increments('u_user_id').primary().notNullable();
        table.integer('u_user_role_id').notNullable();
        table.string('u_user_email').notNullable();
        table.string('u_user_mobile')
        table.string('u_user_pass').notNullable();
        table.string('u_user_fist_name')
        table.string('u_user_last_name')
        table.text('u_user_address')
        table.string('u_email_varification_otp')
        table.string('u_mobile_varification_otp')
        table.string('u_email_varification_otp_expire_time')
        table.string('u_mobile_varification_otp_expire_time')
        table.string('u_user_token')
        table.enum('u_is_user_verified', ['Y', 'N']).notNullable().defaultTo('N');
        table.enum('u_is_user_delete', ['Y', 'N']).notNullable().defaultTo('N');
        table.string('u_user_updated_by')
        table.timestamp('u_user_created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('u_user_updaed_at').notNullable().defaultTo(knex.fn.now());
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('u_user');
}
