import { createFileRoute } from "@tanstack/react-router";
import { requireRoleAccess } from "@/lib/auth";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { CUSTOMER_NAV } from "./_customer-nav";

export const Route = createFileRoute("/customer/notifications")({
  beforeLoad: () => { if (typeof window !== "undefined") return requireRoleAccess(["CUSTOMER"]); },
  component: Notifications,
});

function Notifications() {
  return (
    <PortalShell title="Notifications" nav={CUSTOMER_NAV}>
      <div className="border border-dashed border-white/15 p-10 text-center">
        <p className="font-serif text-2xl font-light text-ivory/50">All clear.</p>
        <p className="mt-3 whisper text-ivory/30">Updates from the desk will appear here.</p>
      </div>
    </PortalShell>
  );
}
