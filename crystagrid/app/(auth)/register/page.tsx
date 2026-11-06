"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function RegisterPage() {
  const supabase = useMemo(() => createClient(), []);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    if (data.user) {
      const { error: profileError } = await supabase
        .from("profiles")
        .update({ full_name: fullName })
        .eq("id", data.user.id);

      if (profileError) {
        setError(profileError.message);
        setLoading(false);
        return;
      }
    }

    setSuccess(
      data.session
        ? "Account created successfully. You can now sign in."
        : `Account created. We sent a confirmation link to ${email}.`
    );
    setLoading(false);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 flex items-center justify-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-lg bg-primary/15 ring-1 ring-primary/30">
            <span className="size-2.5 rounded-sm bg-primary shadow-[0_0_12px_rgba(46,139,255,0.9)]" />
          </span>
          <span className="text-xl font-semibold tracking-tight text-heading">
            Crysta<span className="text-primary">Grid</span>
          </span>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 shadow-2xl shadow-black/40">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-heading">
              Create your account
            </h1>
            <p className="mt-1.5 text-sm text-paragraph">
              Start managing your screens in minutes.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="fullName"
                className="mb-1.5 block text-sm font-medium text-text"
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                autoComplete="name"
                required
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                placeholder="Jane Cooper"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-text placeholder:text-label focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-text"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-text placeholder:text-label focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-sm font-medium text-text"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="new-password"
                required
                minLength={6}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="••••••••"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-text placeholder:text-label focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-1.5 block text-sm font-medium text-text"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                minLength={6}
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                placeholder="••••••••"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-text placeholder:text-label focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            {error && (
              <p
                role="alert"
                className="rounded-lg border border-offline/30 bg-offline/10 px-3 py-2 text-sm text-offline"
              >
                {error}
              </p>
            )}

            {success && (
              <p
                role="status"
                className="rounded-lg border border-live/30 bg-live/10 px-3 py-2 text-sm text-live"
              >
                {success}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ice hover:text-background focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Creating account..." : "Register"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-paragraph">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-primary transition-colors hover:text-ice"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
