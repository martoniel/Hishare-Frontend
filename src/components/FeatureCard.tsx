export default function FeatureCard({
  title,
  description,
  badge,
  tone,
}: {
  title: string
  description: string
  badge?: string
  tone?: 'info' | 'success' | 'warning' | 'neutral'
}) {
  const toneClasses = {
    info: 'bg-slate-50 text-slate-900',
    success: 'bg-emerald-50 text-emerald-900',
    warning: 'bg-rose-50 text-rose-900',
    neutral: 'bg-slate-100 text-slate-900',
  }
  return (
    <div className={`rounded-[28px] border border-slate-200 p-5 shadow-sm ${toneClasses[tone ?? 'neutral']}`}>
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
        {badge ? <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-slate-700">{badge}</span> : null}
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  )
}
