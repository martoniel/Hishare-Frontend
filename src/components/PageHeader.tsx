export default function PageHeader({
  title,
  subtitle,
  badge,
}: {
  title: string
  subtitle: string
  badge?: string
}) {
  return (
    <div className="mb-6 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:flex sm:items-center sm:justify-between">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">{badge ?? 'Patient Portal'}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{subtitle}</p>
      </div>
    </div>
  )
}
