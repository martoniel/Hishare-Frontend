export default function StatCard({
  label,
  value,
  hint,
  highlight,
}: {
  label: string
  value: string
  hint?: string
  highlight?: boolean
}) {
  return (
    <div className={`rounded-3xl border p-5 shadow-sm ${highlight ? 'border-emerald-200 bg-emerald-50' : 'border-slate-200 bg-white'}`}>
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-slate-950">{value}</p>
      {hint ? <p className="mt-2 text-sm text-slate-600">{hint}</p> : null}
    </div>
  )
}
