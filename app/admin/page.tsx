import ClientsList from "@/components/admin/ClientsList"
import OrdersList from "@/components/admin/OrdersList"
import MessagesList from "@/components/admin/MessagesList"

export default function AdminPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin — Dashboard</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Clients</h2>
        <ClientsList />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Commandes</h2>
        <OrdersList />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Messages</h2>
        <MessagesList />
      </section>
    </div>
  )
}
