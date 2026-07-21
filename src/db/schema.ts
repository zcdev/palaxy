import {
    pgTable,
    uuid,
    timestamp,
    text,
    integer,
    jsonb,
} from "drizzle-orm/pg-core";

export const responses = pgTable("responses", {
    id: uuid("id").defaultRandom().primaryKey(),

    createdAt: timestamp("created_at", {
        withTimezone: true,
    }).defaultNow(),

    sessionId: text("session_id"),

    answers: jsonb("answers"),

    avatarResult: text("avatar_result"),

    score: integer("score"),

    meta: jsonb("meta"),
});