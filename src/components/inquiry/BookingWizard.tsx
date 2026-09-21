import { AnimatePresence, motion } from "motion/react";
import { useState, useRef, useEffect, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { ease } from "@/components/scene/motion";
import { createRequest } from "@/lib/request-service";
import { bookingConfig, type ServiceKey, type FieldDef } from "./bookingConfig";
import type { Profile } from "@/lib/auth";

const SERVICES: ServiceKey[] = ["AVIATION", "YACHTS", "MOBILITY", "RESIDENCES", "EXPERIENCES", "CONCIERGE"];

type Values = Record<string, string | number>;

type ComboboxFieldDef = Extract<FieldDef, { type: "combobox" }>;

function ServiceSelector({ onSelect }: { onSelect: (s: ServiceKey) => void }) {
  return (
    <div>
      <p className="whisper text-champagne/80">New Request</p>
      <h1 className="mt-4 font-serif text-5xl font-light text-ivory">What can we arrange?</h1>
      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((key) => {
          const c = bookingConfig[key];
          return (
            <button
              key={key}
              type="button"
              onClick={() => onSelect(key)}
              className="group border border-ivory/10 bg-white/[0.02] p-6 text-left transition-all duration-300 hover:border-champagne/40 hover:bg-champagne/[0.06]"
            >
              <p className="font-serif text-2xl font-light text-ivory">{c.label}</p>
              <p className="mt-2 whisper text-ivory/40">{c.description}</p>
              <span className="mt-6 block h-px w-8 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StepperField({ label, value, min = 1, max = 50, onChange }: { label: string; value: number; min?: number; max?: number; onChange: (v: number) => void }) {
  return (
    <div>
      <p className="whisper text-ivory/45">{label}</p>
      <div className="mt-6 flex items-center gap-8">
        <button type="button" onClick={() => onChange(Math.max(min, value - 1))} className="flex h-12 w-12 items-center justify-center border border-ivory/20 text-2xl text-ivory/60 transition-colors hover:border-champagne hover:text-champagne">−</button>
        <span className="font-serif text-6xl font-light text-ivory">{value}</span>
        <button type="button" onClick={() => onChange(Math.min(max, value + 1))} className="flex h-12 w-12 items-center justify-center border border-ivory/20 text-2xl text-ivory/60 transition-colors hover:border-champagne hover:text-champagne">+</button>
      </div>
    </div>
  );
}

function ComboboxField({ field, value, onChange }: { field: ComboboxFieldDef; value: string; onChange: (v: string) => void }) {
  const [query, setQuery] = useState(value);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const filtered = query.length > 0
    ? field.options.filter((o) => o.toLowerCase().includes(query.toLowerCase()))
    : field.options;

  const showCustomOption = query.length > 0 && !field.options.some((o) => o.toLowerCase() === query.toLowerCase());

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const select = (opt: string) => {
    setQuery(opt);
    onChange(opt);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <label className="block">
        <span className="whisper text-ivory/45">{field.label}{field.required && <span className="text-gold"> *</span>}</span>
        <input
          type="text"
          value={query}
          placeholder={field.placeholder}
          className="field"
          onFocus={() => setOpen(true)}
          onChange={(e) => { setQuery(e.target.value); onChange(e.target.value); setOpen(true); }}
          autoComplete="off"
        />
      </label>
      {open && (filtered.length > 0 || showCustomOption) && (
        <ul className="absolute z-50 mt-1 max-h-56 w-full overflow-y-auto border border-ivory/15 bg-[#0d0d0d] py-1 shadow-xl">
          {filtered.map((opt) => (
            <li
              key={opt}
              onMouseDown={() => select(opt)}
              className={`cursor-pointer px-4 py-3 font-serif text-base font-light transition-colors hover:bg-champagne/10 hover:text-champagne ${
                opt === value ? "text-champagne" : "text-ivory/80"
              }`}
            >
              {opt}
            </li>
          ))}
          {showCustomOption && (
            <li
              onMouseDown={() => select(query)}
              className="cursor-pointer px-4 py-3 font-serif text-base font-light text-ivory/50 transition-colors hover:bg-champagne/10 hover:text-champagne"
            >
              Use &ldquo;{query}&rdquo;
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

function FieldRenderer({ field, values, onChange }: { field: FieldDef; values: Values; onChange: (id: string, v: string | number) => void }) {
  const val = values[field.id];

  if (field.type === "combobox") {
    return <ComboboxField field={field} value={String(val ?? "")} onChange={(v) => onChange(field.id, v)} />;
  }

  if (field.type === "stepper") {
    return <StepperField label={field.label} value={Number(val) || field.min || 1} min={field.min} max={field.max} onChange={(v) => onChange(field.id, v)} />;
  }

  if (field.type === "select") {
    return (
      <label className="block">
        <span className="whisper text-ivory/45">{field.label}{field.required && <span className="text-gold"> *</span>}</span>
        <select value={String(val ?? "")} onChange={(e) => onChange(field.id, e.target.value)} className="field appearance-none bg-transparent">
          <option value="" className="bg-obsidian">—</option>
          {field.options.map((o) => <option key={o} value={o} className="bg-obsidian">{o}</option>)}
        </select>
      </label>
    );
  }

  if (field.type === "textarea") {
    return (
      <label className="block">
        <span className="whisper text-ivory/45">{field.label}{field.required && <span className="text-gold"> *</span>}</span>
        <textarea rows={4} value={String(val ?? "")} onChange={(e) => onChange(field.id, e.target.value)} placeholder={field.placeholder} className="field resize-none" />
      </label>
    );
  }

  return (
    <label className="block">
      <span className="whisper text-ivory/45">{field.label}{field.required && <span className="text-gold"> *</span>}</span>
      <input type={field.type} value={String(val ?? "")} onChange={(e) => onChange(field.id, e.target.value)} placeholder={"placeholder" in field ? field.placeholder : undefined} className="field" />
    </label>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <div className="border-b border-ivory/10 py-4 grid grid-cols-[140px_1fr] gap-4">
      <span className="whisper text-ivory/40">{label}</span>
      <span className="font-serif text-lg font-light text-ivory">{value}</span>
    </div>
  );
}

export function BookingWizard({ profile }: { profile: Profile | null }) {
  const navigate = useNavigate();
  const [service, setService] = useState<ServiceKey | null>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [values, setValues] = useState<Values>({ people_count: 2 });
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const config = service ? bookingConfig[service] : null;
  const steps = config?.steps ?? [];
  const isReview = service !== null && stepIndex === steps.length;
  const currentStep = steps[stepIndex];

  const update = (id: string, v: string | number) => setValues((prev) => ({ ...prev, [id]: v }));

  const validate = () => {
    if (!currentStep) return "";
    for (const field of currentStep.fields) {
      if (field.required && !values[field.id]) return `Please complete: ${field.label}`;
    }
    return "";
  };

  const next = () => {
    const err = validate();
    if (err) { setError(err); return; }
    setError("");
    setStepIndex((i) => i + 1);
  };

  const back = () => {
    setError("");
    if (stepIndex === 0) { setService(null); return; }
    setStepIndex((i) => i - 1);
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setPending(true);
    setError("");
    try {
      const req = await createRequest({
        serviceType: service!,
        serviceSubtype: String(values.subtype ?? ""),
        peopleCount: Number(values.people_count) || 1,
        budget: undefined,
        currency: "EUR",
        departure: String(values.departure ?? ""),
        destination: String(values.destination ?? ""),
        startDate: String(values.start_date ?? ""),
        endDate: String(values.end_date ?? ""),
        tripType: String(values.trip_type ?? "ONE_WAY"),
        additionalRequirements: String(values.additional_requirements ?? ""),
        customerDetails: { name: profile?.full_name ?? "", email: profile?.email ?? "", mobile: profile?.mobile ?? "", country: profile?.country ?? "" },
        serviceDetails: { subtype: values.subtype, timeframe: values.timeframe, setting: values.setting, budget_range: values.budget_range },
      });
      await navigate({ to: "/customer/requests/$id", params: { id: req.id } });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to submit. Please try again.");
      setPending(false);
    }
  };

  if (!service) return <ServiceSelector onSelect={(s) => { setService(s); setStepIndex(0); setValues({ people_count: 2 }); }} />;

  const totalSteps = steps.length + 1;
  const currentNum = isReview ? totalSteps : stepIndex + 1;

  return (
    <form onSubmit={submit}>
      <div className="mb-10 flex items-center gap-3">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <span key={i} className={`h-px flex-1 transition-all duration-500 ${i < currentNum ? "bg-champagne" : "bg-ivory/15"}`} />
        ))}
        <span className="whisper text-ivory/40 shrink-0">{currentNum} / {totalSteps}</span>
      </div>

      <AnimatePresence mode="wait">
        {!isReview ? (
          <motion.div
            key={stepIndex}
            initial={{ opacity: 0, x: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -24, filter: "blur(8px)" }}
            transition={{ duration: 0.45, ease }}
          >
            <p className="whisper text-champagne/80">{config?.label} · {currentStep?.kicker}</p>
            <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-ivory md:text-5xl">{currentStep?.title}</h2>
            <div className="mt-10 space-y-8 max-w-lg">
              {currentStep?.fields.map((field) => (
                <FieldRenderer key={field.id} field={field} values={values} onChange={update} />
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="review"
            initial={{ opacity: 0, x: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -24, filter: "blur(8px)" }}
            transition={{ duration: 0.45, ease }}
          >
            <p className="whisper text-champagne/80">Review</p>
            <h2 className="mt-4 font-serif text-4xl font-light text-ivory">Confirm your request.</h2>
            <div className="mt-10 max-w-lg border-t border-ivory/10">
              <ReviewRow label="Service" value={config?.label ?? ""} />
              <ReviewRow label="Type" value={String(values.subtype ?? "")} />
              <ReviewRow label="From" value={String(values.departure ?? "")} />
              <ReviewRow label="To / Destination" value={String(values.destination ?? "")} />
              <ReviewRow label="Date" value={String(values.start_date ?? "")} />
              <ReviewRow label="Return" value={String(values.end_date ?? "")} />
              <ReviewRow label="Guests / Pax" value={String(values.people_count ?? "")} />
              <ReviewRow label="Budget" value={String(values.budget_range ?? "")} />
              <ReviewRow label="Timeframe" value={String(values.timeframe ?? "")} />
              <ReviewRow label="Notes" value={String(values.additional_requirements ?? "")} />
            </div>
            <p className="mt-8 whisper text-ivory/35">Submitted to the HELITEJET desk. A concierge will be in touch within the hour.</p>
          </motion.div>
        )}
      </AnimatePresence>

      {error && <p role="alert" className="mt-6 border border-red-300/30 p-3 text-sm text-red-100">{error}</p>}

      <div className="mt-10 flex items-center justify-between border-t border-ivory/10 pt-6">
        <button type="button" onClick={back} className="whisper text-ivory/50 transition-colors hover:text-champagne">← Back</button>
        {!isReview ? (
          <button type="button" onClick={next} className="group inline-flex items-center gap-4 whisper text-champagne transition-colors hover:text-ivory">
            <span>Next</span>
            <span className="relative block h-px w-12 overflow-hidden bg-gold/50">
              <span className="absolute inset-0 origin-left scale-x-0 bg-ivory transition-transform duration-500 group-hover:scale-x-100" />
            </span>
          </button>
        ) : (
          <button type="submit" disabled={pending} className="group inline-flex items-center gap-4 whisper text-champagne transition-colors hover:text-ivory disabled:opacity-50">
            <span>{pending ? "Submitting…" : "Submit Request"}</span>
            <span className="relative block h-px w-12 overflow-hidden bg-gold/50">
              <span className="absolute inset-0 origin-left scale-x-0 bg-ivory transition-transform duration-500 group-hover:scale-x-100" />
            </span>
          </button>
        )}
      </div>
    </form>
  );
}
