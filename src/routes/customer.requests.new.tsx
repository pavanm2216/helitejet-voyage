import { createFileRoute } from "@tanstack/react-router";
import { requireRoleAccess, useAuth } from "@/lib/auth";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { BookingWizard } from "@/components/inquiry/BookingWizard";
import { CUSTOMER_NAV } from "./_customer-nav";

export const Route = createFileRoute("/customer/requests/new")({
  beforeLoad: () => { if (typeof window !== "undefined") return requireRoleAccess(["CUSTOMER"]); },
  component: NewRequest,
});

function NewRequest() {
  const { profile } = useAuth();
  return (
    <PortalShell title="New request" nav={CUSTOMER_NAV}>
      <BookingWizard profile={profile} />
    </PortalShell>
  );
}
