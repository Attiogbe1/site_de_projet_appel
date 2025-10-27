export type Client = { id: string; name: string; email: string; phone?: string }
export type Order = { id: string; clientId: string; product: string; qty: number; status: string }
export type Message = { id: string; from: string; email?: string; body: string; createdAt: string }

let clients: Client[] = [
  { id: "c1", name: "Aminata Koudjo", email: "aminata@example.com", phone: "00229 60 00 00 00" },
  { id: "c2", name: "Jean-Baptiste Soglo", email: "jean@example.com" },
]

let orders: Order[] = [
  { id: "o1", clientId: "c1", product: "Briquette 10kg", qty: 5, status: "confirmed" },
  { id: "o2", clientId: "c2", product: "Briquette 5kg", qty: 2, status: "pending" },
]

let messages: Message[] = [
  { id: "m1", from: "Marie", email: "marie@example.com", body: "Bonjour, comment commander ?", createdAt: new Date().toISOString() },
]

export function getClients() { return clients }
export function getOrders() { return orders }
export function getMessages() { return messages }

export function addMessage(msg: Omit<Message, "id" | "createdAt">) {
  const newM: Message = { id: `m${Date.now()}`, createdAt: new Date().toISOString(), ...msg }
  messages.unshift(newM)
  return newM
}

export function updateOrderStatus(id: string, status: string) {
  const o = orders.find(x => x.id === id)
  if (o) o.status = status
  return o
}
