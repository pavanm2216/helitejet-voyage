import { createFileRoute } from "@tanstack/react-router";
import { requireRoleAccess, useAuth } from "@/lib/auth";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { CUSTOMER_NAV } from "./_customer-nav";

export const Route = createFileRoute("/customer/profile")({
  beforeLoad: () => { if (typeof window !== "undefined") return requireRoleAccess(["CUSTOMER"]); },
  component: Profile,
});

function Profile() {
  const { profile } = useAuth();
  const rows = [
    ["Full name", profile?.full_name ?? "—"],
    ["Email", profile?.email ?? "—"],
    ["Mobile", profile?.mobile ?? "—"],
    ["Country", profile?.country ?? "—"],
    ["Company", profile?.company ?? "—"],
    ["Club", profile?.subscription_club ?? "No active subscription"],
    ["Club status", profile?.subscription_status ?? "—"],
  ];
  return (
    <PortalShell title="Profile" nav={CUSTOMER_NAV}>
      <div className="max-w-lg border-t border-ivory/10">
        {rows.map(([label, value]) => (
          <div key={label} className="grid grid-cols-[140px_1fr] gap-4 border-b border-ivory/10 py-4">
            <span className="whisper text-ivory/40">{label}</span>
            <span className="font-serif text-lg font-light text-ivory">{value}</span>
          </div>
        ))}
      </div>
    </PortalShell>
  );
}
