import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useAuth } from "@/lib/auth";

export function PortalShell({
  children,
  title,
  nav,
  onLogout,
}: {
  children: ReactNode;
  title: string;
  nav: { label: string; to: string }[];
  onLogout?: () => void;
}) {
  const { profile, logout } = useAuth();
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  async function handleLogout() {
    if (onLogout) { onLogout(); return; }
    await logout();
    await navigate({ to: "/login" });
  }

  return (
    <div className="min-h-screen bg-obsidian text-ivory">
      {/* Mobile top bar */}
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 lg:hidden">
        <Link to="/" className="font-serif text-xl tracking-[0.2em] text-ivory">HJ</Link>
        <button
          type="button"
          onClick={() => void handleLogout()}
          className="whisper text-ivory/40 transition-colors hover:text-champagne"
        >
          Logout →
        </button>
      </div>

      <div className="mx-auto flex max-w-7xl gap-8 p-5 sm:p-8">
        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-ivory">
            HJ
          </Link>
          <p className="mt-1 whisper text-champagne">{profile?.role ?? "PORTAL"}</p>
          <p className="mt-1 text-xs text-ivory/40">{profile?.full_name}</p>

          <nav className="mt-10 space-y-1">
            {nav.map((item) => {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`block border px-3 py-2 text-sm transition-colors ${
                    active
                      ? "border-champagne/30 bg-champagne/10 text-champagne"
                      : "border-transparent text-ivory/55 hover:border-white/10 hover:text-ivory"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => void handleLogout()}
            className="mt-10 whisper text-ivory/40 transition-colors hover:text-champagne"
          >
            Logout →
          </button>
        </aside>

        {/* Main */}
        <main className="min-w-0 flex-1">
          <header className="mb-8 border-b border-white/10 pb-6">
            <p className="whisper text-champagne">Private portal</p>
            <h1 className="mt-2 font-serif text-5xl font-light">{title}</h1>
            <p className="mt-2 text-sm text-ivory/50">{profile?.email}</p>
          </header>
          {children}
        </main>
      </div>
    </div>
  );
}
