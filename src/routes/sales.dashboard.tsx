import { Link, createFileRoute } from "@tanstack/react-router";
import { requireRoleAccess, useAuth } from "@/lib/auth";
import { PortalShell } from "@/components/dashboard/PortalShell";

export const Route = createFileRoute("/sales/dashboard")({
  beforeLoad: () => { if (typeof window !== "undefined") return requireRoleAccess(["SALES"]); },
  component: SalesDashboard,
});

const nav = [
  { label: "01 Dashboard", to: "/sales/dashboard" },
  { label: "02 Requests", to: "/sales/requests" },
  { label: "03 My Requests", to: "/sales/requests" },
  { label: "04 Customers", to: "/sales/requests" },
  { label: "05 Aviation", to: "/sales/requests" },
  { label: "06 Yachts", to: "/sales/requests" },
  { label: "07 Quotes", to: "/sales/requests" },
  { label: "08 Bookings", to: "/sales/requests" },
  { label: "09 Messages", to: "/sales/requests" },
  { label: "10 Follow-ups", to: "/sales/requests" },
  { label: "11 Documents", to: "/sales/requests" },
  { label: "12 Profile", to: "/sales/requests" },
];

function SalesDashboard() {
  const { profile } = useAuth();

  return (
    <PortalShell
      title={`Good evening, ${profile?.full_name?.split(" ")[0] ?? "concierge"}.`}
      nav={nav}
    >
      <div className="grid gap-5 md:grid-cols-3">
        <Link to="/sales/requests" className="border border-champagne/40 bg-champagne/10 p-6 transition-colors hover:bg-champagne/20">
          <p className="whisper text-champagne">Operations</p>
          <p className="mt-4 font-serif text-3xl">Open requests →</p>
        </Link>
        <div className="border border-white/10 bg-white/[0.03] p-6">
          <p className="whisper text-ivory/50">Quotes pending</p>
          <p className="mt-4 font-serif text-4xl">0</p>
        </div>
        <div className="border border-white/10 bg-white/[0.03] p-6">
          <p className="whisper text-ivory/50">Bookings</p>
          <p className="mt-4 font-serif text-4xl">0</p>
        </div>
      </div>
    </PortalShell>
  );
}
