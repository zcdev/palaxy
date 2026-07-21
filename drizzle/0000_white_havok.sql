CREATE TABLE "responses" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	"session_id" text,
	"answers" jsonb,
	"avatar_result" text,
	"score" integer,
	"meta" jsonb
);
