import { NextResponse } from "next/server";
import { db } from "@/db";
import { responses } from "@/db/schema";

export async function POST(req: Request) {
    const body = await req.json();

    await db.insert(responses).values({
        sessionId: body.sessionId,
        answers: body.answers,
        avatarResult: body.avatarResult,
    });

    return NextResponse.json({ success: true });
}