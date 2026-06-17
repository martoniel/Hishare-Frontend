import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-2xl rounded-[36px] border border-slate-200 bg-white p-10 text-center shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Page not found</p>
      <h1 className="mt-6 text-4xl font-semibold text-slate-950">404 — Lost in the health network</h1>
      <p className="mt-4 text-sm leading-6 text-slate-600">The page you’re looking for doesn’t exist yet. Return to the dashboard to continue exploring HiShare.</p>
      <Link to="/dashboard" className="mt-8 inline-flex rounded-3xl bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800">
        Back to dashboard
      </Link>
    </div>
  )
}
