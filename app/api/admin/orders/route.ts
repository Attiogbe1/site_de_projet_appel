import { NextResponse } from "next/server"
import { getOrders, updateOrderStatus } from "@/lib/admin-data"

export async function GET() {
  return NextResponse.json(getOrders())
}

export async function PATCH(req: Request) {
  const body = await req.json().catch(() => ({}))
  const { id, status } = body as { id?: string; status?: string }
  if (!id || !status) return NextResponse.json({ error: "missing id/status" }, { status: 400 })
  const updated = updateOrderStatus(id, status)
  return updated ? NextResponse.json(updated) : NextResponse.json({ error: "not found" }, { status: 404 })
}
