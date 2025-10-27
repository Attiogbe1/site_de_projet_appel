"use client"

import { useEffect, useState } from "react"
import type { Order } from "@/lib/admin-data"

export default function OrdersList() {
  const [orders, setOrders] = useState<Order[] | null>(null)

  useEffect(() => {
    fetch("/api/admin/orders")
      .then((r) => r.json())
      .then(setOrders)
      .catch(console.error)
  }, [])

  async function setStatus(id: string, status: string) {
    const res = await fetch("/api/admin/orders", {
      method: "PATCH",
      body: JSON.stringify({ id, status }),
      headers: { "Content-Type": "application/json" },
    })
    if (!res.ok) return
    const updated = await res.json()
    setOrders((prev) => (prev ? prev.map((o) => (o.id === updated.id ? updated : o)) : prev))
  }

  if (!orders) return <div>Chargement des commandes…</div>

  return (
    <div className="bg-card rounded p-4">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="py-2">Produit</th>
            <th>Qté</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id} className="border-t">
              <td className="py-2">{o.product}</td>
              <td>{o.qty}</td>
              <td>{o.status}</td>
              <td>
                <button onClick={() => setStatus(o.id, "confirmed")} className="mr-2 btn">
                  Confirmer
                </button>
                <button onClick={() => setStatus(o.id, "canceled")} className="btn-ghost">
                  Annuler
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
