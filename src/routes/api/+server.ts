import { db } from "$lib/server/db";
import { characterTable } from "$lib/server/db/schema";
import { sql } from "drizzle-orm";

async function randomCharacter() {
    const character = await db
        .select({
            id: characterTable.id,
            name: characterTable.name,
        })
        .from(characterTable)
        .orderBy(sql`RANDOM()`)
        .limit(1);
    return character[0]
}

export async function GET() {
    const character = await randomCharacter();
    return new Response(character.name);
}