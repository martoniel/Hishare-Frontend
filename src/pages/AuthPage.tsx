import { useState } from 'react'

export default function AuthPage() {
  const [mode, setMode] = useState<'signin' | 'signup'>('signup')

  return (
    <div className="mx-auto max-w-xl rounded-[36px] border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-8 flex items-center justify-between gap-6">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-700">HiShare</p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-950">Join HiShare</h1>
          <p className="mt-2 text-sm text-slate-600">Empower your digital identity with human-centered precision.</p>
        </div>
        <div className="h-14 w-14 rounded-3xl bg-slate-100" />
      </div>

      <div className="mb-8 grid gap-3 sm:grid-cols-2">
        <button
          onClick={() => setMode('signup')}
          className={`rounded-3xl px-5 py-3 text-sm font-semibold transition ${
            mode === 'signup'
              ? 'bg-emerald-700 text-white'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Create Account
        </button>
        <button
          onClick={() => setMode('signin')}
          className={`rounded-3xl px-5 py-3 text-sm font-semibold transition ${
            mode === 'signin'
              ? 'bg-emerald-700 text-white'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Sign In
        </button>
      </div>

      <form className="grid gap-5">
        {mode === 'signup' ? (
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Full Name
            <input type="text" placeholder="John Doe" className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" />
          </label>
        ) : null}

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Email
          <input type="email" placeholder="john@example.com" className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Password
          <input type="password" placeholder="••••••••" className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100" />
        </label>

        {mode === 'signup' ? (
          <label className="inline-flex items-center gap-3 text-sm text-slate-600">
            <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
            I agree to the Terms of Service and Privacy Policy.
          </label>
        ) : null}

        <button className="rounded-3xl bg-emerald-700 px-5 py-4 text-sm font-semibold text-white transition hover:bg-emerald-800">
          {mode === 'signup' ? 'Create Secure Account' : 'Sign In'}
        </button>
      </form>

      <p className="mt-6 text-sm text-slate-500">
        {mode === 'signup' ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button onClick={() => setMode(mode === 'signup' ? 'signin' : 'signup')} className="font-semibold text-emerald-700 underline decoration-emerald-200">
          {mode === 'signup' ? 'Sign in' : 'Create one'}
        </button>
      </p>
    </div>
  )
}
