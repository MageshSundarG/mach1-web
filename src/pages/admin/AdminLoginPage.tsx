import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { blogApi } from "@/lib/api/blog";
import { ApiError } from "@/lib/api/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();
  const meQuery = useQuery({
    queryKey: ["admin-me"],
    queryFn: blogApi.me,
    staleTime: 60_000,
  });

  const loginMutation = useMutation({
    mutationFn: () => blogApi.login(email, password),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["admin-me"] });
      const redirectTo = (location.state as { from?: string } | null)?.from || "/admin";
      navigate(redirectTo, { replace: true });
    },
  });

  const message =
    loginMutation.error instanceof ApiError ? loginMutation.error.message : "";

  if (meQuery.isLoading) {
    return <main className="min-h-screen bg-[#020617]" />;
  }

  if (meQuery.data?.user) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <>
      <Header variant="dark" />
      <main className="bg-[#020617] pb-24 pt-36 text-white">
        <section className="site-shell max-w-xl">
          <div className="glass-panel rounded-[32px] p-8 md:p-10">
            <span className="inline-flex rounded-full border border-white/12 bg-white/[0.05] px-5 py-2 text-[13px] uppercase tracking-[0.3em] text-white/72">
              Admin Access
            </span>
            <h1 className="title-balanced mt-6 text-[40px] font-normal md:text-[56px]">
              Sign in to manage blog posts
            </h1>
            <p className="copy-balanced mt-4 text-[17px] text-white/68">
              Use your admin or author account to create, edit, publish, and manage blog content.
            </p>

            <form
              className="mt-10 space-y-5"
              onSubmit={(event) => {
                event.preventDefault();
                loginMutation.mutate();
              }}
            >
              <label className="space-y-2">
                <span className="text-sm text-white/80">Email</span>
                <input
                  type="email"
                  className="form-field"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm text-white/80">Password</span>
                <input
                  type="password"
                  className="form-field"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </label>

              {message ? <p className="text-sm text-red-300">{message}</p> : null}

              <button
                type="submit"
                disabled={loginMutation.isPending}
                className="premium-button rounded-full px-6 py-3 text-sm font-semibold text-white disabled:opacity-60"
              >
                {loginMutation.isPending ? "Signing in..." : "Sign In"}
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer variant="dark" />
    </>
  );
}
