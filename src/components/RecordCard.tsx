export default function RecordCard({
  title,
  subtitle,
  status,
  date,
}: {
  title: string
  subtitle: string
  status: string
  date: string
}) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-400">{status}</p>
          <h3 className="mt-3 text-lg font-semibold text-slate-950">{title}</h3>
          <p className="mt-2 text-sm text-slate-600">{subtitle}</p>
        </div>
        <p className="text-sm font-medium text-slate-500">{date}</p>
      </div>
      <div className="mt-5 flex items-center gap-3 text-sm text-slate-600">
        <button className="rounded-2xl border border-slate-200 px-3 py-2 text-slate-700 transition hover:bg-slate-50">View</button>
        <button className="rounded-2xl border border-slate-200 px-3 py-2 text-slate-700 transition hover:bg-slate-50">Share</button>
        <button className="rounded-2xl border border-slate-200 px-3 py-2 text-slate-700 transition hover:bg-slate-50">Archive</button>
      </div>
    </div>
  )
}
