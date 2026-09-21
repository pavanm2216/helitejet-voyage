import { createFileRoute, Link, Outlet, useMatchRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { requireRoleAccess } from "@/lib/auth";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { listCustomerRequests } from "@/lib/request-service";
import { CUSTOMER_NAV } from "./_customer-nav";

export const Route = createFileRoute("/customer/requests")({
  beforeLoad: () => { if (typeof window !== "undefined") return requireRoleAccess(["CUSTOMER"]); },
  component: Requests,
});

const nav = CUSTOMER_NAV;

const STATUS_COLOR: Record<string, string> = {
  SUBMITTED: "text-ivory/60",
  UNDER_REVIEW: "text-champagne",
  SALES_CONTACTED: "text-champagne",
  OPTIONS_FOUND: "text-gold",
  QUOTE_SENT: "text-gold",
  CUSTOMER_APPROVAL: "text-gold",
  PAYMENT_PENDING: "text-gold",
  BOOKED: "text-green-300",
  COMPLETED: "text-green-300",
  CANCELLED: "text-red-300",
  REJECTED: "text-red-300",
  EXPIRED: "text-red-300",
};

function RequestsList() {
  const [requests, setRequests] = useState<Array<Record<string, unknown>>>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    void listCustomerRequests()
      .then((data) => setRequests(data as Array<Record<string, unknown>>))
      .catch((err) => setError(err instanceof Error ? err.message : "Unable to load requests."));
  }, []);

  return (
    <PortalShell title="My requests" nav={nav}>
      {error && <p className="border border-red-300/30 p-4 text-sm text-red-100">{error}</p>}
      {!error && !requests.length && (
        <div className="border border-dashed border-white/15 p-10 text-center">
          <p className="font-serif text-2xl font-light text-ivory/50">No requests yet.</p>
          <Link to="/customer/requests/new" className="mt-6 inline-block whisper text-champagne transition-colors hover:text-ivory">
            Make your first request →
          </Link>
        </div>
      )}
      <div className="space-y-3">
        {requests.map((req) => (
          <Link
            key={String(req.id)}
            to="/customer/requests/$id"
            params={{ id: String(req.id) }}
            className="group flex items-center justify-between border border-ivory/10 bg-white/[0.02] p-5 transition-colors hover:border-champagne/30 hover:bg-champagne/[0.04]"
          >
            <div>
              <p className="whisper text-champagne/80">{String(req.request_number)}</p>
              <p className="mt-2 font-serif text-2xl font-light text-ivory">{String(req.service_type)}</p>
              <p className="mt-1 text-sm text-ivory/50">
                {String(req.destination ?? "Destination TBC")}
                {req.start_date ? ` · ${String(req.start_date)}` : ""}
                {req.people_count ? ` · ${String(req.people_count)} guests` : ""}
              </p>
            </div>
            <div className="flex items-center gap-6">
              <span className={`whisper ${STATUS_COLOR[String(req.status)] ?? "text-ivory/50"}`}>{String(req.status).replace(/_/g, " ")}</span>
              <span className="text-ivory/30 transition-colors group-hover:text-champagne">→</span>
            </div>
          </Link>
        ))}
      </div>
    </PortalShell>
  );
}

function Requests() {
  const matchRoute = useMatchRoute();
  const isIndex = matchRoute({ to: "/customer/requests", fuzzy: false });
  return isIndex ? <RequestsList /> : <Outlet />;
}
