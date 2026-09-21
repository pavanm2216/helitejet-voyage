import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { requireRoleAccess } from "@/lib/auth";
import { PortalShell } from "@/components/dashboard/PortalShell";
import { getRequest } from "@/lib/request-service";
import { CUSTOMER_NAV } from "./_customer-nav";

export const Route = createFileRoute("/customer/requests/$id")({
  beforeLoad: () => { if (typeof window !== "undefined") return requireRoleAccess(["CUSTOMER"]); },
  component: RequestDetail,
});

const STATUS_STEPS = [
  "SUBMITTED",
  "UNDER_REVIEW",
  "SALES_CONTACTED",
  "OPTIONS_FOUND",
  "QUOTE_SENT",
  "CUSTOMER_APPROVAL",
  "PAYMENT_PENDING",
  "BOOKED",
  "COMPLETED",
];

const STATUS_LABEL: Record<string, string> = {
  SUBMITTED: "Submitted",
  UNDER_REVIEW: "Under Review",
  SALES_CONTACTED: "Desk Contacted",
  OPTIONS_FOUND: "Options Found",
  QUOTE_SENT: "Quote Sent",
  CUSTOMER_APPROVAL: "Awaiting Approval",
  PAYMENT_PENDING: "Payment Pending",
  BOOKED: "Booked",
  COMPLETED: "Completed",
  CANCELLED: "Cancelled",
  REJECTED: "Rejected",
  EXPIRED: "Expired",
};

const nav = CUSTOMER_NAV;

function RequestDetail() {
  const { id } = Route.useParams();
  const [request, setRequest] = useState<Record<string, unknown> | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    void getRequest(id)
      .then((data) => setRequest(data as Record<string, unknown>))
      .catch((err) => setError(err instanceof Error ? err.message : "Unable to load request."));
  }, [id]);

  if (error) {
    return (
      <PortalShell title="Request" nav={nav}>
        <p className="border border-red-300/30 p-4 text-sm text-red-100">{error}</p>
      </PortalShell>
    );
  }

  if (!request) {
    return (
      <PortalShell title="Loading…" nav={nav}>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => <div key={i} className="h-16 animate-pulse border border-ivory/10 bg-white/[0.02]" />)}
        </div>
      </PortalShell>
    );
  }

  const status = String(request.status ?? "SUBMITTED");
  const statusIndex = STATUS_STEPS.indexOf(status);
  const isTerminal = ["CANCELLED", "REJECTED", "EXPIRED"].includes(status);
  const serviceDetails = (request.service_details ?? {}) as Record<string, unknown>;

  return (
    <PortalShell title={String(request.request_number ?? "Request")} nav={nav}>
      {/* Status tracker */}
      <div className="mb-10">
        <div className="mb-4 flex items-center justify-between">
          <p className="whisper text-champagne/80">Status</p>
          <span className={`whisper ${isTerminal ? "text-red-300" : "text-champagne"}`}>{STATUS_LABEL[status] ?? status}</span>
        </div>
        {!isTerminal && (
          <div className="flex gap-1">
            {STATUS_STEPS.map((s, i) => (
              <div key={s} className="flex-1">
                <div className={`h-1 transition-all duration-700 ${i <= statusIndex ? "bg-champagne" : "bg-ivory/15"}`} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Details grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          ["Service", String(request.service_type ?? "")],
          ["Type", String(request.service_subtype ?? serviceDetails.subtype ?? "—")],
          ["From", String(request.departure ?? "—")],
          ["To", String(request.destination ?? "—")],
          ["Date", String(request.start_date ?? "—")],
          ["Return", String(request.end_date ?? "—")],
          ["Guests / Pax", String(request.people_count ?? "—")],
          ["Budget", String(serviceDetails.budget_range ?? "—")],
          ["Trip Type", String(request.trip_type ?? "—")],
        ].map(([label, value]) => (
          <div key={label} className="border border-ivory/10 bg-white/[0.02] p-5">
            <p className="whisper text-ivory/40">{label}</p>
            <p className="mt-2 font-serif text-xl font-light text-ivory">{value}</p>
          </div>
        ))}
      </div>

      {/* Requirements */}
      {request.additional_requirements && (
        <div className="mt-6 border border-ivory/10 bg-white/[0.02] p-5">
          <p className="whisper text-ivory/40">Additional Requirements</p>
          <p className="mt-3 font-serif text-lg font-light leading-relaxed text-ivory/80">{String(request.additional_requirements)}</p>
        </div>
      )}

      {/* Created */}
      <div className="mt-8 flex items-center justify-between border-t border-ivory/10 pt-6">
        <p className="whisper text-ivory/30">Submitted {new Date(String(request.created_at)).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</p>
        <Link to="/customer/requests" className="whisper text-ivory/40 transition-colors hover:text-champagne">← All requests</Link>
      </div>
    </PortalShell>
  );
}
