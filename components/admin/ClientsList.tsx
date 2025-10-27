"use client"

import { useEffect, useState } from "react"
import type { Client } from "@/lib/admin-data"

export default function ClientsList() {
  const [clients, setClients] = useState<Client[] | null>(null)
  useEffect(() => {
    fetch("/api/admin/clients")
      .then((r) => r.json())
      .then(setClients)
      .catch(console.error)
  }, [])

  if (!clients) return <div>Chargement des clients…</div>

  return (
    <div className="bg-card rounded p-4">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="py-2">Nom</th>
            <th>Email</th>
            <th>Téléphone</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((c) => (
            <tr key={c.id} className="border-t">
              <td className="py-2">{c.name}</td>
              <td>{c.email}</td>
              <td>{c.phone || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
