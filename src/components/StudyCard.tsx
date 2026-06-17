export default function StudyCard({
  title,
  org,
  status,
  reward,
  duration,
  commitment,
}: {
  title: string
  org: string
  status: string
  reward: string
  duration: string
  commitment: string
}) {
  return (
    <article className="rounded-[32px] border border-slate-200 bg-white px-5 py-6 shadow-sm transition hover:border-emerald-300">
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
          {status}
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">{reward}</span>
      </div>
      <h2 className="mt-4 text-xl font-semibold text-slate-950">{title}</h2>
      <p className="mt-2 text-sm text-slate-500">{org}</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-3xl bg-slate-50 p-4 text-sm">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Duration</p>
          <p className="mt-2 font-semibold text-slate-900">{duration}</p>
        </div>
        <div className="rounded-3xl bg-slate-50 p-4 text-sm">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Commitment</p>
          <p className="mt-2 font-semibold text-slate-900">{commitment}</p>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <button className="rounded-2xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">View Details</button>
        <button className="rounded-2xl border border-emerald-700 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100">Apply</button>
      </div>
    </article>
  )
}
