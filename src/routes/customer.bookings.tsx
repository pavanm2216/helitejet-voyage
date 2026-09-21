import { createFileRoute } from "@tanstack/react-router";
import { requireRoleAccess } from "@/lib/auth";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { CUSTOMER_NAV } from "./_customer-nav";

export const Route = createFileRoute("/customer/bookings")({
  beforeLoad: () => { if (typeof window !== "undefined") return requireRoleAccess(["CUSTOMER"]); },
  component: Bookings,
});

function Bookings() {
  return (
    <PortalShell title="Bookings" nav={CUSTOMER_NAV}>
      <div className="border border-dashed border-white/15 p-10 text-center">
        <p className="font-serif text-2xl font-light text-ivory/50">No confirmed bookings yet.</p>
        <p className="mt-3 whisper text-ivory/30">Confirmed arrangements will appear here.</p>
      </div>
    </PortalShell>
  );
}
