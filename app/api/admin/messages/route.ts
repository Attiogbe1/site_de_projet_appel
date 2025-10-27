import { NextResponse } from "next/server"
import { getMessages, addMessage } from "@/lib/admin-data"

export async function GET() {
  return NextResponse.json(getMessages())
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}))
  if (!body.from || !body.body) return NextResponse.json({ error: "missing fields" }, { status: 400 })
  const saved = addMessage({ from: body.from, email: body.email, body: body.body })
  return NextResponse.json(saved, { status: 201 })
}
