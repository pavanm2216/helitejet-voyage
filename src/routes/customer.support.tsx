import { createFileRoute } from "@tanstack/react-router";
import { requireRoleAccess } from "@/lib/auth";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { CUSTOMER_NAV } from "./_customer-nav";

export const Route = createFileRoute("/customer/support")({
  beforeLoad: () => { if (typeof window !== "undefined") return requireRoleAccess(["CUSTOMER"]); },
  component: Support,
});

function Support() {
  return (
    <PortalShell title="Support" nav={CUSTOMER_NAV}>
      <div className="space-y-6 max-w-lg">
        <div className="border border-ivory/10 bg-white/[0.02] p-6">
          <p className="font-serif text-xl font-light text-ivory">Concierge desk</p>
          <p className="mt-2 whisper text-ivory/40">Available 24 / 7</p>
          <a href="mailto:desk@helitejet.com" className="mt-4 block whisper text-champagne transition-colors hover:text-ivory">desk@helitejet.com →</a>
        </div>
        <div className="border border-ivory/10 bg-white/[0.02] p-6">
          <p className="font-serif text-xl font-light text-ivory">Emergency line</p>
          <p className="mt-2 whisper text-ivory/40">For time-critical arrangements</p>
          <a href="tel:+442079460330" className="mt-4 block whisper text-champagne transition-colors hover:text-ivory">+44 20 7946 0330 →</a>
        </div>
      </div>
    </PortalShell>
  );
}
