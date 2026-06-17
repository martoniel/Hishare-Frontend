export default function ActivityItem({
  title,
  detail,
  time,
  actionLabel,
}: {
  title: string
  detail: string
  time: string
  actionLabel?: string
}) {
  return (
    <div className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mt-1 h-3 w-3 rounded-full bg-emerald-500" />
      <div className="flex-1">
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <p className="mt-2 text-sm text-slate-600">{detail}</p>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <span>{time}</span>
          {actionLabel ? (
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">{actionLabel}</span>
          ) : null}
        </div>
      </div>
    </div>
  )
}
