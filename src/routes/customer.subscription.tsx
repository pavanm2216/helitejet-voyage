import { Link, createFileRoute, useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useState, type FormEvent } from "react";
import { requireRoleAccess, useAuth, type SubscriptionClub } from "@/lib/auth";
import { CinematicPage } from "@/components/scene/CinematicPage";
import { SubscriptionsSections } from "@/components/pages/sections";
import { worlds, subscriptionContent } from "@/content/site";
import { supabase } from "@/integrations/supabase/client";
import { ease } from "@/components/scene/motion";
import { GlassPanel } from "@/components/lux/GlassPanel";
import { SelectField, TextArea, SubmitLine, Received } from "@/components/forms/fields";

const CLUB_KEYS = ["HORIZON", "RESERVE", "HOUSE"] as const;
const CLUB_MAP = {
  HORIZON: { ...subscriptionContent.clubs[0], price: "£12,000 / year" },
  RESERVE: { ...subscriptionContent.clubs[1], price: "£28,000 / year" },
  HOUSE:   { ...subscriptionContent.clubs[2], price: "£65,000 / year" },
} as const;

const PAYMENT_METHODS = [
  "Bank Transfer (SWIFT / IBAN)",
  "Bank Transfer (Domestic)",
  "Cheque",
  "Cryptocurrency",
  "Other — desk will advise",
] as const;

export const Route = createFileRoute("/customer/subscription")({
  beforeLoad: () => { if (typeof window !== "undefined") return requireRoleAccess(["CUSTOMER"]); },
  component: CustomerSubscription,
});

function CustomerSubscription() {
  const { profile, logout, refreshProfile } = useAuth();
  const navigate = useNavigate();

  const [requestingClub, setRequestingClub] = useState<SubscriptionClub | null>(null);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleLogout() {
    await logout();
    await navigate({ to: "/login" });
  }

  function openRequest(key: SubscriptionClub) {
    setRequestingClub(key);
    setPaymentMethod("");
    setMessage("");
    setDone(false);
    setError(null);
  }

  function closeRequest() {
    setRequestingClub(null);
    setDone(false);
    setError(null);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!requestingClub || !profile) return;
    if (!paymentMethod) { setError("Please select a payment method."); return; }
    setSubmitting(true);
    setError(null);

    const { error: insertError } = await supabase
      .from("subscription_requests")
      .insert({
        customer_id: profile.id,
        club: requestingClub,
        payment_method: paymentMethod,
        billing_cycle: "YEARLY",
        message: message || null,
        status: "PENDING",
      });

    if (insertError) {
      setError("Something went wrong. Please try again.");
      setSubmitting(false);
      return;
    }

    // Mark profile as pending
    await supabase
      .from("profiles")
      .update({ subscription_club: requestingClub, subscription_status: "PENDING" })
      .eq("id", profile.id);

    await refreshProfile();
    setSubmitting(false);
    setDone(true);
  }

  const club = requestingClub ? CLUB_MAP[requestingClub] : null;

  return (
    <div className="relative">
      {/* Portal top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-white/10 bg-obsidian/90 px-6 py-3 backdrop-blur-sm">
        <Link to="/customer/dashboard" className="whisper text-ivory/50 transition-colors hover:text-champagne">
          ← Dashboard
        </Link>
        <span className="whisper text-ivory/30">Private Portal</span>
        <button type="button" onClick={() => void handleLogout()} className="whisper text-ivory/40 transition-colors hover:text-champagne">
          Logout →
        </button>
      </div>

      <div className="mt-[45px]">
        <CinematicPage world={worlds.subscriptions}>
          <SubscriptionsSections
            activeClub={profile?.subscription_club ?? null}
            activeStatus={profile?.subscription_status ?? null}
            onSelect={openRequest}
            selecting={null}
          />
        </CinematicPage>
      </div>

      {/* Payment request overlay */}
      <AnimatePresence>
        {requestingClub && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-obsidian/80 px-5 backdrop-blur-sm"
            onClick={(e) => { if (e.target === e.currentTarget) closeRequest(); }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.6, ease }}
              className="w-full max-w-xl"
            >
              <GlassPanel className="px-8 py-10 md:px-12 md:py-12">
                <AnimatePresence mode="wait">
                  {done ? (
                    <motion.div key="done" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <Received
                        title="Request received."
                        body="The desk will contact you within 24 hours to arrange payment and activate your club."
                      />
                      <div className="mt-10 text-center">
                        <button type="button" onClick={closeRequest} className="whisper text-ivory/40 transition-colors hover:text-champagne">
                          Close
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div key="form" exit={{ opacity: 0 }}>
                      {/* Header */}
                      <div className="mb-8 flex items-start justify-between gap-4">
                        <div>
                          <p className="whisper text-champagne/80">{club?.tag}</p>
                          <h2 className="mt-2 font-serif text-3xl font-light text-ivory">{club?.name}</h2>
                          <p className="mt-1 font-serif text-lg font-light text-champagne/70">{club?.price} · Billed annually</p>
                        </div>
                        <button type="button" onClick={closeRequest} aria-label="Close" className="whisper text-ivory/30 transition-colors hover:text-ivory mt-1">
                          ✕
                        </button>
                      </div>

                      {/* Pre-filled member info */}
                      <div className="mb-8 border border-white/10 bg-white/[0.03] px-5 py-4 space-y-1">
                        <p className="whisper text-ivory/40">Member details — pre-filled from your profile</p>
                        <p className="font-serif text-base font-light text-ivory/70">{profile?.full_name}</p>
                        <p className="font-serif text-sm font-light text-ivory/50">{profile?.email}</p>
                        {profile?.mobile && <p className="font-serif text-sm font-light text-ivory/50">{profile.mobile}</p>}
                      </div>

                      <form onSubmit={(e) => void handleSubmit(e)} className="space-y-8">
                        <SelectField
                          label="Preferred payment method"
                          name="payment_method"
                          options={PAYMENT_METHODS}
                          required
                          value={paymentMethod}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <TextArea
                          label="Message to the desk"
                          name="message"
                          placeholder="Any questions or preferences before the desk calls."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />

                        {error && (
                          <p role="alert" className="font-serif text-base italic text-red-400">{error}</p>
                        )}

                        <div className="flex items-center justify-between gap-6 border-t border-white/10 pt-6">
                          <SubmitLine pending={submitting}>Send request</SubmitLine>
                          <p className="whisper !normal-case !tracking-[0.12em] text-ivory/30">Held in confidence.</p>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassPanel>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
