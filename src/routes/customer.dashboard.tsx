import { Link, createFileRoute } from "@tanstack/react-router";
import { requireRoleAccess, useAuth } from "@/lib/auth";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { CUSTOMER_NAV } from "./_customer-nav";
import { subscriptionContent } from "@/content/site";

const CLUB_MAP = {
  HORIZON: { ...subscriptionContent.clubs[0], price: "£12,000 / year" },
  RESERVE: { ...subscriptionContent.clubs[1], price: "£28,000 / year" },
  HOUSE:   { ...subscriptionContent.clubs[2], price: "£65,000 / year" },
} as const;

export const Route = createFileRoute("/customer/dashboard")({
  beforeLoad: () => { if (typeof window !== "undefined") return requireRoleAccess(["CUSTOMER"]); },
  component: CustomerDashboard,
});

function CustomerDashboard() {
  const { profile } = useAuth();
  const club = profile?.subscription_club ? CLUB_MAP[profile.subscription_club] : null;

  return (
    <PortalShell
      title={`Good evening, ${profile?.full_name?.split(" ")[0] ?? "member"}.`}
      nav={CUSTOMER_NAV}
    >
      <div className="grid gap-5 md:grid-cols-3">
        <div className="border border-white/10 bg-white/[0.03] p-6">
          <p className="whisper text-ivory/50">Active requests</p>
          <p className="mt-4 font-serif text-4xl">0</p>
        </div>
        <div className="border border-white/10 bg-white/[0.03] p-6">
          <p className="whisper text-ivory/50">Pending quotes</p>
          <p className="mt-4 font-serif text-4xl">0</p>
        </div>
        <Link
          to="/customer/requests/new"
          className="border border-champagne/40 bg-champagne/10 p-6 transition-colors hover:bg-champagne/20"
        >
          <p className="whisper text-champagne">Begin</p>
          <p className="mt-4 font-serif text-3xl">New request →</p>
        </Link>
      </div>

      {club ? (
        <div className={`mt-8 border p-6 bg-white/[0.03] ${
          profile?.subscription_status === "ACTIVE" ? "border-gold/30" : "border-champagne/20"
        }`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <p className="whisper text-champagne/80">{club.tag}</p>
                {profile?.subscription_status === "PENDING" && (
                  <span className="whisper text-champagne/50">· Awaiting confirmation</span>
                )}
                {profile?.subscription_status === "ACTIVE" && (
                  <span className="whisper text-gold">· Active</span>
                )}
              </div>
              <h2 className="mt-3 font-serif text-3xl font-light text-ivory">{club.name}</h2>
              <p className="mt-2 font-serif text-base font-light text-ivory/60">{club.blurb}</p>
            </div>
            <Link to="/customer/subscription" className="whisper shrink-0 text-champagne hover:text-ivory transition-colors">
              {profile?.subscription_status === "PENDING" ? "View request →" : "View benefits →"}
            </Link>
          </div>
          {profile?.subscription_status === "ACTIVE" && (
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {club.perks.map((perk) => (
                <li key={perk} className="flex items-center gap-3 text-ivory/65">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" aria-hidden="true" />
                  <span className="font-serif text-sm font-light">{perk}</span>
                </li>
              ))}
            </ul>
          )}
          {profile?.subscription_status === "PENDING" && (
            <p className="mt-4 font-serif text-sm font-light text-ivory/45">
              The desk will contact you within 24 hours to arrange payment.
            </p>
          )}
        </div>
      ) : (
        <div className="mt-8 border border-white/10 bg-white/[0.03] p-6 flex items-center justify-between gap-6">
          <div>
            <p className="whisper text-ivory/50">No active subscription</p>
            <p className="mt-2 font-serif text-lg font-light text-ivory/70">Explore our clubs to unlock priority access and dedicated benefits.</p>
          </div>
          <Link to="/customer/subscription" className="whisper shrink-0 text-champagne hover:text-ivory transition-colors">
            Explore clubs →
          </Link>
        </div>
      )}
    </PortalShell>
  );
}
