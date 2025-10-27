"use client"

import { useEffect, useState } from "react"
import type { Message } from "@/lib/admin-data"

export default function MessagesList() {
  const [messages, setMessages] = useState<Message[] | null>(null)
  const [sending, setSending] = useState(false)
  const [from, setFrom] = useState("")
  const [body, setBody] = useState("")

  useEffect(() => {
    fetch("/api/admin/messages")
      .then((r) => r.json())
      .then(setMessages)
      .catch(console.error)
  }, [])

  async function send() {
    if (!from || !body) return
    setSending(true)
    const res = await fetch("/api/admin/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ from, body }),
    })
    if (res.ok) {
      const saved = await res.json()
      setMessages((prev) => (prev ? [saved, ...prev] : [saved]))
      setFrom("")
      setBody("")
    }
    setSending(false)
  }

  if (!messages) return <div>Chargement des messages…</div>

  return (
    <div className="bg-card rounded p-4">
      <div className="mb-4">
        <input value={from} onChange={(e) => setFrom(e.target.value)} placeholder="Votre nom" className="input mr-2" />
        <input value={body} onChange={(e) => setBody(e.target.value)} placeholder="Message (test)" className="input mr-2" />
        <button onClick={send} disabled={sending} className="btn">
          {sending ? "Envoi…" : "Envoyer"}
        </button>
      </div>

      <ul>
        {messages.map((m) => (
          <li key={m.id} className="border-t py-3">
            <div className="text-sm text-muted-foreground">{m.from} • {new Date(m.createdAt).toLocaleString()}</div>
            <div className="mt-1">{m.body}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
