import { Link, createFileRoute } from "@tanstack/react-router";
import { requireRoleAccess } from "@/lib/auth";
import { PortalShell } from "@/components/dashboard/PortalShell";

export const Route = createFileRoute("/admin/dashboard")({
  beforeLoad: () => { if (typeof window !== "undefined") return requireRoleAccess(["ADMIN"]); },
  component: AdminDashboard,
});

const nav = [
  { label: "01 Dashboard", to: "/admin/dashboard" },
  { label: "02 Customers", to: "/admin/requests" },
  { label: "03 Sales Team", to: "/admin/requests" },
  { label: "04 Requests", to: "/admin/requests" },
  { label: "05 Aircraft", to: "/admin/requests" },
  { label: "06 Yachts", to: "/admin/requests" },
  { label: "07 Operators", to: "/admin/requests" },
  { label: "08 Quotes", to: "/admin/requests" },
  { label: "09 Bookings", to: "/admin/requests" },
  { label: "10 Voice Assistant", to: "/admin/requests" },
  { label: "11 Analytics", to: "/admin/requests" },
  { label: "12 Pricing", to: "/admin/requests" },
  { label: "13 Content", to: "/admin/requests" },
  { label: "14 Notifications", to: "/admin/requests" },
  { label: "15 Audit Logs", to: "/admin/requests" },
  { label: "16 Settings", to: "/admin/requests" },
];

function AdminDashboard() {
  return (
    <PortalShell title="Platform overview" nav={nav}>
      <div className="grid gap-5 md:grid-cols-3">
        <Link to="/admin/requests" className="border border-champagne/40 bg-champagne/10 p-6 transition-colors hover:bg-champagne/20">
          <p className="whisper text-champagne">Administration</p>
          <p className="mt-4 font-serif text-3xl">All requests →</p>
        </Link>
        <div className="border border-white/10 bg-white/[0.03] p-6">
          <p className="whisper text-ivory/50">Customers</p>
          <p className="mt-4 font-serif text-4xl">—</p>
        </div>
        <div className="border border-white/10 bg-white/[0.03] p-6">
          <p className="whisper text-ivory/50">Bookings</p>
          <p className="mt-4 font-serif text-4xl">—</p>
        </div>
      </div>

      <div className="mt-10 border border-ivory/10 bg-white/[0.02] p-6">
        <p className="whisper text-champagne">Admin Bootstrap</p>
        <p className="mt-3 font-serif text-sm text-ivory/60">
          To create Sales accounts, use the Supabase dashboard or run the SQL below in the Supabase SQL editor.
          Sales users log in through <span className="text-champagne">/login</span> and are redirected to their dashboard automatically.
        </p>
        <pre className="mt-4 overflow-x-auto border border-ivory/10 bg-obsidian p-4 text-xs text-ivory/50">{`-- Create a Sales user (run in Supabase SQL editor as service role)
-- 1. Create auth user via Supabase Auth dashboard or API
-- 2. Then update their profile role:
UPDATE public.profiles
SET role = 'SALES'
WHERE email = 'sales@example.com';`}</pre>
      </div>
    </PortalShell>
  );
}
