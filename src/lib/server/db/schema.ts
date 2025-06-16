import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const characterTable = sqliteTable('character', {
	id: integer('id').primaryKey(),
	name: text('name').notNull(),
});
